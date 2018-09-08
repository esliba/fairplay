import { Journalist } from '../models/journalist.model';

export class JournalistsServices {
    private journalists : Journalist[] = [
        new Journalist(
            1, 
            'Exequiel Sliba',
            'Ganar, ganar lindo, feo, mal, bien. Ganar siempre',
            'Estudiante de ingenieria',
            'assets/img/us/keko.png'
        ),
        new Journalist(
            2, 
            'Horacio Cappelluti',
            'Odio eterno al fútbol moderno',
            'Estudiante de Artes Audiovisuales',
            'assets/img/us/horace.png'
        ),
        new Journalist(
            3, 
            'Valeria Barbieris',
            'A la espera de conocer su opinión',
            'Periodista deportiva',
            'assets/img/us/vale.png'
        )
    ];

    getJournalists() {
        return this.journalists.slice();
    }

    getJournalistsById(index: number){
        return this.journalists[index];
    }

}