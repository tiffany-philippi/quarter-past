import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import { CLIENT_LABEL } from '../../core/constants/labels';

@Component({
  selector: 'qp-client-detail',
  templateUrl: './client-detail.page.html',
  styleUrl: './client-detail.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class ClientDetailPage {
  protected readonly title = CLIENT_LABEL;
}
