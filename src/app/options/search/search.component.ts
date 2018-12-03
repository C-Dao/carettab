import { Component } from '@angular/core';
import { Storage } from '../../_storage/storage.service';
import { searchEngines } from '../../_shared/lists/lists';
import { SharedService } from '../../_shared/shared.service';

@Component({
  selector: 'options-search',
  templateUrl: 'search.component.html'
})
export class OptionsSearchComponent {
  engines = searchEngines;

  constructor(
    public shared: SharedService,
    public settings: Storage
  ) {
  }

  /** Updates storage */
  saveAll() {
    this.settings.setAll(this.settings.config);
  }

  changeOrder(up) {
    if (up) {
      if (this.settings.config.search.order > this.shared.orderMin) {
        this.settings.config.search.order--;
        this.saveAll();
      }
    } else {
      if (this.settings.config.search.order < this.shared.orderMax) {
        this.settings.config.search.order++;
        this.saveAll();
      }
    }
  }

}
