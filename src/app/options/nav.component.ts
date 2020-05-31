import { Component } from '@angular/core';
import { SharedService } from '../_shared/shared.service';
import { Storage } from '../_storage/storage.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nav',
  template:
  `
    <ul>
      <li>
        <button title="Dashboard" type="button" (click)="goToPage('Dashboard')" [ngClass]="{'active': shared.optionsPage === 'Dashboard'}">
          <div class="icon">info</div>
        </button>
      </li>
      <li>
        <button
          title="{{'options.design.design' | translate}}"
          type="button" (click)="goToPage('Design')" [ngClass]="{'active': shared.optionsPage === 'Design'}">
          <div class="icon">format_paint</div>
        </button>
      </li>
      <li>
        <button
          title="{{'options.time.time' | translate}}"
          type="button" (click)="goToPage('Time')" [ngClass]="{'active': shared.optionsPage === 'Time'}">
          <div class="icon">access_time</div>
        </button>
      </li>
      <li>
        <button
          title="{{'options.date.date' | translate}}"
          type="button" (click)="goToPage('Date')" [ngClass]="{'active': shared.optionsPage === 'Date'}">
          <div class="icon">insert_invitation</div>
        </button>
      </li>
      <li>
        <button
          title="{{'options.bookmarks.headingBar' | translate}}"
          type="button" (click)="goToPage('Bookmarks')" [ngClass]="{'active': shared.optionsPage === 'Bookmarks'}">
          <div class="icon">star</div>
        </button>
      </li>
      <li>
        <button
          title="{{'options.search.search' | translate}}"
          type="button" (click)="goToPage('Search')" [ngClass]="{'active': shared.optionsPage === 'Search'}">
          <div class="icon">search</div>
        </button>
      </li>
      <li>
        <button
          title="{{'options.message.customMsg' | translate}}"
          type="button" (click)="goToPage('Message')" [ngClass]="{'active': shared.optionsPage === 'Message'}">
          <div class="icon">textsms</div>
        </button>
      </li>
      <li>
        <button
          title="Extra"
          type="button" (click)="goToPage('Extra')" [ngClass]="{'active': shared.optionsPage === 'Extra'}">
          <div class="icon">settings</div>
        </button>
      </li>
      <li>
        <button type="button" (click)="saveAndClose()" class="close" title="Save and close settings">
          <div class="icon">save</div>
        </button>
      </li>
    </ul>
  `,
})
export class NavComponent {

  constructor(
    public shared: SharedService,
    public settings: Storage
  ) {
  }

  goToPage(page: string) {
    this.shared.optionsPage = page;
  }

  saveAndClose() {
    this.settings.setAll(this.settings.config);
    this.shared.optionsToggle = false;
  }

}
