import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'strong'
})

export class StrongPipe implements PipeTransform {
    transform(text: string, searchStr): string {
        return text.replace(new RegExp(searchStr, 'gi'), `<strong>${searchStr}</strong>`);
    }
}
