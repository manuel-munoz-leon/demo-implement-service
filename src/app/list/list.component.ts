import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Api } from '../api.interface';
import { GenericService } from '../generic.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  // private subscriptions: Subscription;
  // public entries: any[];
  apis$: Observable<Api[]> = this.genericService
    .getData<any>('https://api.publicapis.org/entries')
    .pipe(map((data: any) => data.entries));

  constructor(private genericService: GenericService) {
    // this.subscriptions = new Subscription();
    // this.subscriptions.add(this.handleSubscription());
    // this.entries = [];
  }

  // private handleSubscription(): Subscription {
  //   return this.genericService
  //     .getData('https://api.publicapis.org/entries')
  //     .subscribe((data: any[]) => (this.entries = data));
  // }

  // public ngOnDestroy(): void {
  //   this.subscriptions.unsubscribe();
  // }
}
