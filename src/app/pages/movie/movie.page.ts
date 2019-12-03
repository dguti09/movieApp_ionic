import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.page.html',
    styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {

    constructor(private router: ActivatedRoute) {

        this.router.params.subscribe(idMovie => {
            console.log(idMovie);
        });

    }

    ngOnInit() {
    }

}
