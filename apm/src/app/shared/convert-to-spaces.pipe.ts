import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform{
  /**
   * transform a string to replace a character with a new character
   * @value the value in the pipe
   * @character the character to be replaced
   * @replace the new character to be placed
   */
  transform(value: string, character: string, replace: string): string {
    return value.replace(character, replace);
  }
}