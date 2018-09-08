import { Opinion } from '../models/opinion.model'
import { Journalist } from '../models/journalist.model';

export class OpinionsServices {

    private opinions: Opinion[] = [
        new Opinion(
          1,
          'Opinion 1',
          'Una Opinion de prueba',
          'Una Opinion de prueba',
          'assets/img/opinions_img/img1.png',
          new Journalist(
              1, 
              'Exequiel Sliba',
              'Ganar, ganar lindo, feo, mal, bien. Ganar siempre',
              'Estudiante de ingenieria',
              'assets/img/us/img1.png'
            ),
            'Boca'
        ),
        new Opinion(
          2,
          'Opinion 2',
          'Otra Opinion de prueba',
          'Otra Opinion de prueba',
          'assets/img/opinions_img/img2.png',
          new Journalist(
            2, 
            'Horacio Cappelluti',
            'Odio eterno al fútbol moderno',
            'Estudiante de Artes Audiovisuales',
            'assets/img/us/img2.png'
          ),
          'River'
        ),
        new Opinion(
          3,
          'Opinion 3',
          'Otra Opinion de prueba mas',
          'Otra Opinion de prueba mas',
          'assets/img/opinions_img/img3.png',
          new Journalist(
            3, 
            'Valeria Barbieris',
            'A la espera de conocer su opinión',
            'Periodista deportiva',
            'assets/img/us/img3.png'
          ),
          'Gimnasia'
        ),
        new Opinion(
            4,
            'Opinion 4',
            'Una Opinion de prueba',
            'Una Opinion de prueba',
            'assets/img/opinions_img/img1.png',
            new Journalist(
                1, 
                'Exequiel Sliba',
                'Ganar, ganar lindo, feo, mal, bien. Ganar siempre',
                'Estudiante de ingenieria',
                'assets/img/us/img1.png'
              ),
            'Boca'
          ),
          new Opinion(
            5,
            'Opinion 5',
            'Otra Opinion de prueba',
            'Otra Opinion de prueba',
            'assets/img/opinions_img/img2.png',
            new Journalist(
              2, 
              'Horacio Cappelluti',
              'Odio eterno al fútbol moderno',
              'Estudiante de Artes Audiovisuales',
              'assets/img/us/img2.png'
            ),
            'River'
          ),
          new Opinion(
            6,
            'Opinion 6',
            'Otra Opinion de prueba mas',
            'Otra Opinion de prueba mas',
            'assets/img/opinions_img/img3.png',
            new Journalist(
              3, 
              'Valeria Barbieris',
              'A la espera de conocer su opinión',
              'Periodista deportiva',
              'assets/img/us/img3.png'
            ),
            'Gimnasia'
          ),
          new Opinion(
            7,
            'Opinion 7',
            'Una Opinion de prueba',
            'Una Opinion de prueba',
            'assets/img/opinions_img/img1.png',
            new Journalist(
                1, 
                'Exequiel Sliba',
                'Ganar, ganar lindo, feo, mal, bien. Ganar siempre',
                'Estudiante de ingenieria',
                'assets/img/us/img1.png'
              ),
            'Boca'
          ),
          new Opinion(
            8,
            'Opinion 8',
            'Otra Opinion de prueba',
            'Otra Opinion de prueba',
            'assets/img/opinions_img/img2.png',
            new Journalist(
              2, 
              'Horacio Cappelluti',
              'Odio eterno al fútbol moderno',
              'Estudiante de Artes Audiovisuales',
              'assets/img/us/img2.png'
            ),
            'River'
          ),
          new Opinion(
            9,
            'Opinion 9',
            'Otra Opinion de prueba mas',
            'Otra Opinion de prueba mas',
            'assets/img/opinions_img/img3.png',
            new Journalist(
              3, 
              'Valeria Barbieris',
              'A la espera de conocer su opinión',
              'Periodista deportiva',
              'assets/img/us/img3.png'
            ),
            'Gimnasia'
          )
      ];

    getOpinions(){
        return this.opinions.slice();
    }

    getOpinionById(index: number){
        return this.opinions[index];
    }
}