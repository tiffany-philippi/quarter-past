import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Persistent bottom bar showing the running session timer
 * (Spotify "now playing" style). Empty placeholder for now.
 */
@Component({
  selector: 'qp-timer-bar',
  templateUrl: './timer-bar.component.html',
  styleUrl: './timer-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerBarComponent {}
