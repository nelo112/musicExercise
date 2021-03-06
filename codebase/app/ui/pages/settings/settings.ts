import {Page} from 'ionic-angular';
import {TranslateService} from '../../../data/translate/translate-service';

@Page({
  templateUrl: 'build/ui/pages/settings/settings.html'
})
export class Settings {

  constructor (private translate : TranslateService) {
  }

  deutsch () : void {
    this.translate.german();
  }

  english () : void {
    this.translate.english();
  }

  get language () : string {
    return this.translate.getCurrentLanguage();
  }

  set language (lan : string) {
    // nothing
  }

}
