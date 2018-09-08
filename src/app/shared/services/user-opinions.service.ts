import { UserOpinion } from '../models/user-opinion.model'

export class UserOpinionsServices {

    private analysis: UserOpinion[] = [
        new UserOpinion(
          1,
          'UserOpinion 1',
          'Un Analisis de prueba',
          'Un Analisis de prueba',
          'assets/img/analysis_img/img1.png',
          'Boca'
        ),
        new UserOpinion(
          2,
          'UserOpinion 2',
          'Otro Analisis de prueba',
          'Otro Analisis de prueba',
          'assets/img/analysis_img/img2.png',
          'River'
        ),
        new UserOpinion(
          3,
          'UserOpinion 3',
          'Otro Analisis de prueba mas',
          'Otro Analisis de prueba mas',
          'assets/img/analysis_img/img3.png',
          'Gimnasia'
        ),
        new UserOpinion(
          4,
          'UserOpinion 4',
          'Un Analisis de prueba',
          'Un Analisis de prueba',
          'assets/img/analysis_img/img1.png',
          'Boca'
        ),
        new UserOpinion(
          5,
          'UserOpinion 5',
          'Otro Analisis de prueba',
          'Otro Analisis de prueba',
          'assets/img/analysis_img/img2.png',
          'River'
        ),
        new UserOpinion(
          6,
          'UserOpinion 6',
          'Otro Analisis de prueba mas',
          'Otro Analisis de prueba mas',
          'assets/img/analysis_img/img3.png',
          'Gimnasia'
        ),
        new UserOpinion(
          7,
          'UserOpinion 7',
          'Un Analisis de prueba',
          'Un Analisis de prueba',
          'assets/img/analysis_img/img1.png',
          'Boca'
        ),
        new UserOpinion(
          8,
          'UserOpinion 8',
          'Otro Analisis de prueba',
          'Otro Analisis de prueba',
          'assets/img/analysis_img/img2.png',
          'River'
        ),
        new UserOpinion(
          9,
          'UserOpinion 9',
          'Otro Analisis de prueba mas',
          'Otro Analisis de prueba mas',
          'assets/img/analysis_img/img3.png',
          'Gimnasia'
        ),
        new UserOpinion(
          10,
          'UserOpinion 10',
          'Un Analisis de prueba',
          'Un Analisis de prueba',
          'assets/img/analysis_img/img1.png',
          'Boca'
        ),
        new UserOpinion(
          11,
          'UserOpinion 11',
          'Otro Articulo de prueba',
          'Otro Articulo de prueba',
          'assets/img/analysis_img/img2.png',
          'River'
        ),
        new UserOpinion(
          12,
          'UserOpinion 12',
          'Otro Analisis de prueba mas',
          'Otro Analisis de prueba mas',
          'assets/img/analysis_img/img3.png',
          'Gimnasia'
        ),
        new UserOpinion(
          13,
          'UserOpinion 13',
          'Otro Analisis de prueba mas que va a romper todo',
          'Otro Analisis de prueba mas que va a romper todo',
          'assets/img/analysis_img/img1.png',
          'Boca'
        )
      ];

    getUserOpinions(){
        return this.analysis.slice();
    }

    getUserOpinionById(index: number){
        return this.analysis[index];
    }
}