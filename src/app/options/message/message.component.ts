import { Component } from '@angular/core';
import { Storage } from '../../_storage/storage.service';
import { SharedService } from '../../_shared/shared.service';

@Component({
  selector: 'options-message',
  templateUrl: 'message.component.html'
})
export class OptionsMessageComponent {

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
      if (this.settings.config.message.order > this.shared.orderMin) {
        this.settings.config.message.order--;
        this.saveAll();
      }
    } else {
      if (this.settings.config.message.order < this.shared.orderMax) {
        this.settings.config.message.order++;
        this.saveAll();
      }
    }
  }

}
