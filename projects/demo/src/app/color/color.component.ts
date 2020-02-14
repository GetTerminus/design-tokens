import {
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import {
  LOCAL_STORAGE,
  WebStorageService,
} from 'ngx-webstorage-service';
import TOKENS_TREE from '@terminus/design-tokens/js/design-tokens-tree';

import { hexToRGB } from '../utilities/hexToRgb';
import { rgbToHsl } from '../utilities/rgbToHsl';


/**
 * Define the structure for a color definition
 */
export interface TS_COLOR {
  name: string;
  colors: Record<string, any>[];
}

// Define the prefix used in our naming scheme
const PREFIX = 'ts';

@Component({
  selector: 'tsdt-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
})
export class ColorComponent implements OnInit {
  tokens = TOKENS_TREE;
  colors: TS_COLOR[];
  formats = ['hex', 'rgb', 'hsl'];
  selectedFormat = 'hex';

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
    this.colors = ColorComponent.formatData(this.tokens.color.base);
  }

  /**
   * Initialize user preferences if they exist
   */
  public ngOnInit(): void {
    const userFormatPreference = this.getFromLocalStorage('colorFormat');
    if (userFormatPreference) {
      this.selectedFormat = userFormatPreference;
    }
  }

  /**
   * Format the original color data for usage in the template
   *
   * @param colors - The raw data
   * @return The array of formatted color data
   */
  private static formatData(colors: Record<string, any>): TS_COLOR[] {
    const originalColorKeys = Object.keys(colors);
    const newColorArray = [];

    for (const value of originalColorKeys) {
      if ('value' in colors[value]) {
        const item = {
          name: value,
          colors: [colors[value]],
        };
        item.colors[0].jsName = ColorComponent.jsonToJsToken(colors[value].path);
        item.colors[0].sassName = ColorComponent.jsonToSassToken(colors[value].path);
        item.colors[0].humanName = ColorComponent.jsonToHumanName(colors[value].path);
        newColorArray.push(item);
      } else {
        const palette = colors[value];
        const paletteKeys = Object.keys(palette);
        const item = {
          name: value,
          colors: [],
        };

        for (const inner of paletteKeys) {
          palette[inner].jsName = ColorComponent.jsonToJsToken(palette[inner].path);
          palette[inner].sassName = ColorComponent.jsonToSassToken(palette[inner].path);
          palette[inner].humanName = ColorComponent.jsonToHumanName(palette[inner].path);
          item.colors.push(palette[inner]);
        }

        newColorArray.push(item);
      }
    }
    return newColorArray;
  }

  /**
   * Save the format to local storage when it is changed by the user
   */
  public saveFormat(): void {
    this.saveInLocalStorage('colorFormat', this.selectedFormat);
  }

  /**
   * Format the color to the selected format
   *
   * @param color - The hex color
   * @return The converted color
   */
  public formatColor(color: string): string {
    if (this.selectedFormat === 'rgb') {
      return hexToRGB(color);
    }
    if (this.selectedFormat === 'hsl') {
      const rgb = hexToRGB(color);
      return rgbToHsl(rgb);
    }
    return color;
  }

  /**
   * Retrieve data from local storage
   *
   * @param key - The key to retrieve from storage
   * @return The retrieved value
   */
  private getFromLocalStorage(key: string): string {
    return this.storage.get(key);
  }

  /**
   * Convert a JSON path to a human name
   *
   * @param path - The path to convert
   * @return The new name
   */
  private static jsonToHumanName(path: string[]): string {
    const thirdItem = 2;
    const trimmed = path.slice(thirdItem, path.length);
    if (trimmed.length > 1) {
      return `${trimmed[0]}: ${trimmed[1]}`;
    }
    return `${trimmed[0]}`;
  }

  /**
   * Convert a JSON path to a JS token
   *
   * @param path - The path to convert
   * @return The new token
   */
  private static jsonToJsToken(path: string[]): string {
    return `${PREFIX}_${path.join('_')}`.toUpperCase();
  }

  /**
   * Convert a JSON path to a Sass token
   *
   * @param path - The path to convert
   * @return The new token
   */
  private static jsonToSassToken(path: string[]): string {
    return `${PREFIX}-${path.join('-')}`;
  }

  /**
   * Save data to local storage
   *
   * @param key - The key to save the information at
   * @param value - The key information to save
   */
  private saveInLocalStorage(key: string, value: string): void {
    this.storage.set(key, value);
  }
}
