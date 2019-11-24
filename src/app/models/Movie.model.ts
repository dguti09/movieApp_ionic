export class MovieModel {
    id: number;
    score: number;
    title: string;
    date: Date;
    resume: string;
    posterImage: string;

    constructor(id: number, score: number, title: string, date: Date,
                resume: string, posterImage: string) {
        this.id = id;
        this.score = score;
        this.date = date;
        this.title = title;
        this.posterImage = posterImage;
        this.resume = resume;
    }
}
