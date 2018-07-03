import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'name'
})

export class NamePipe implements PipeTransform {
    transform(text: string, searchStr): string {
        return text.replace(new RegExp(searchStr, 'gi'), `<strong>${searchStr}</strong>`)
    }
}