export class MovieModel {
    id: number;
    score: number;
    title: string;
    date: Date;
    resume: string;
    posterImage: string;
    backgroundImage: string;
    resumeMin: string;
    webUrl: string;
    genre: string;

    constructor() {
    }

    generateResumeMin() {
        if (this.resume && this.resume.length > 140) {
            this.resumeMin = this.resume.substring(0, 137);
            this.resumeMin = this.resumeMin.concat('...');
        } else {
            this.resumeMin = this.resume;
        }
    }
}
