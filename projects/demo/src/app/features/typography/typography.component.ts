import { Component } from '@angular/core';
import TOKENS_TREE from '@terminus/design-tokens/js/design-tokens-tree';

import { SettingsService } from '../../services/settings.service';
import { jsonPathToString } from '../../utilities/jsonPathToString';
import { jsonToHumanName } from '../../utilities/jsonToHumanName';
import { jsonToJsToken } from '../../utilities/jsonToJsToken';
import { jsonToSassToken } from '../../utilities/jsonToSassToken';
import { objToArray } from '../../utilities/objectToArray';


@Component({
  selector: 'tsdt-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
})
export class TypographyComponent {
  // Store the formatted stacks data
  public formatted;
  // TODO move to base class? Global service?
  public svgAsset = '/assets/chain.svg';
  public demoText = `The quick brown fox jumps over the lazy dog`;
  public typographySizes = objToArray(TOKENS_TREE.typography.size);

  constructor(public settingsService: SettingsService) {
    this.formatted = TypographyComponent.formatTypographyStacks(TOKENS_TREE.typography.stack.base);
  }

  /**
   * Format the typography stacks into an array for the DOM
   *
   * @param data - The raw data
   * @return The array of formatted stacks
   */
  private static formatTypographyStacks(data: Record<string, any>): Record<string, any>[] {
    const stackNames = Object.keys(data);
    const newArray = [];

    for (const stackName of stackNames) {
      const stack = data[stackName];
      const item = {
        name: stack.name,
        value: stack.value,
        jsName: jsonToJsToken(stack.path),
        sassName: jsonToSassToken(stack.path),
        humanName: jsonToHumanName(stack.path),
        jsonPath: jsonPathToString(stack.path),
      };
      newArray.push(item);
    }

    return newArray;
  }

}
