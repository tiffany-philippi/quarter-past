import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'qp-session-edit',
  templateUrl: './session-edit.page.html',
  styleUrl: './session-edit.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class SessionEditPage {
  protected readonly title = 'Session';
}
