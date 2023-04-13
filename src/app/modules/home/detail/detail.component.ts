import { Component, Input, OnInit } from '@angular/core';
import { FetchApiService } from 'src/app/core/services/api-service/fetch-api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() searchVal?: string;

  allSurahQuran:any = new Array;

  constructor(
    private apiService: FetchApiService
  ){  }

  ngOnInit(): void {
      this.apiService.getAllSurahQuran().subscribe({
        next: (resp: any) => {
          console.log(resp);
          this.allSurahQuran = resp.chapters;
        },
        error:(err) => {
          console.log(err)
        },
        complete:() => {
          console.log('complete')
        }
      })
  }

}
