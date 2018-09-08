import { Article } from '../models/new.model'

export class NewsServices {

    private articles: Article[] = [
        new Article(
          1,
          'Articulo 1',
          'Un Articulo de prueba',
          'Un Articulo de prueba',
          'assets/img/news_img/img1.png',
          'Superliga'
        ),
        new Article(
          2,
          'Articulo 2',
          'Otro Articulo de prueba',
          'Otro Articulo de prueba',
          'assets/img/news_img/img2.png',
          'Superliga'
        ),
        new Article(
          3,
          'Articulo 3',
          'Otro Articulo de prueba mas',
          'Otro Articulo de prueba mas',
          'assets/img/news_img/img3.png',
          'Superliga'
        ),
        new Article(
          4,
          'Articulo 4',
          'Un Articulo de prueba',
          'Un Articulo de prueba',
          'assets/img/news_img/img1.png',
          'Superliga'
        ),
        new Article(
          5,
          'Articulo 5',
          'Otro Articulo de prueba',
          'Otro Articulo de prueba',
          'assets/img/news_img/img2.png',
          'Superliga'
        ),
        new Article(
          6,
          'Articulo 6',
          'Otro Articulo de prueba mas',
          'Otro Articulo de prueba mas',
          'assets/img/news_img/img3.png',
          'Superliga'
        ),
        new Article(
          7,
          'Articulo 7',
          'Un Articulo de prueba',
          'Un Articulo de prueba',
          'assets/img/news_img/img1.png',
          'Superliga'
        ),
        new Article(
          8,
          'Articulo 8',
          'Otro Articulo de prueba',
          'Otro Articulo de prueba',
          'assets/img/news_img/img2.png',
          'Superliga'
        ),
        new Article(
          9,
          'Articulo 9',
          'Otro Articulo de prueba mas',
          'Otro Articulo de prueba mas',
          'assets/img/news_img/img3.png',
          'Superliga'
        ),
        new Article(
          10,
          'Articulo 10',
          'Un Articulo de prueba',
          'Un Articulo de prueba',
          'assets/img/news_img/img1.png',
          'Superliga'
        ),
        new Article(
          11,
          'Articulo 11',
          'Otro Articulo de prueba',
          'Otro Articulo de prueba',
          'assets/img/news_img/img2.png',
          'Superliga'
        ),
        new Article(
          12,
          'Articulo 12',
          'Otro Articulo de prueba mas',
          'Otro Articulo de prueba mas',
          'assets/img/news_img/img3.png',
          'Superliga'
        ),
        new Article(
          13,
          'Articulo 13',
          'Otro Articulo de prueba mas que va a romper todo',
          'Otro Articulo de prueba mas que va a romper todo',
          'assets/img/news_img/img3.png',
          'Superliga'
        )
      ];

    getNews(){
        return this.articles.slice();
    }

    getNewById(index: number){
        return this.articles[index];
    }

    getLastNew(){
      const aux= (this.articles.length);
      return this.articles[aux-1];
    }
}