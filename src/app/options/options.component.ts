import { Component, ViewEncapsulation, HostBinding, OnInit } from '@angular/core';
import { SharedService } from '../_shared/shared.service';
import { Storage } from '../_storage/storage.service';
import { slideIn } from '../_shared/animations';

@Component({
  selector: 'app-options',
  templateUrl: 'options.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [
    slideIn
  ]
})
export class OptionsComponent implements OnInit {
  @HostBinding('class.options-wrapper') options = true;

  constructor(
    public shared: SharedService,
    public settings: Storage
  ) {
    this.settings.onChange().subscribe((data) => {
      this.setMinMax();
    });
  }

  ngOnInit() {
    this.setMinMax();
  }

  setMinMax() {
    let max = this.shared.clockOrderStart - 1;
    let min = this.shared.clockOrderStart;
    if (this.settings.config.search.enabled) { max++; min--; }
    if (this.settings.config.date.enabled) { max++; min--; }
    if (this.settings.config.message.enabled) { max++; min--; }
    if (this.settings.config.time.clocks.length > 0) {
      max = max + this.settings.config.time.clocks.length;
    }
    this.shared.orderMax = max;
    this.shared.orderMin = min;
  }

  goToPage(page: string) {
    this.shared.optionsPage = page;
  }

}
