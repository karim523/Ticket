import { Component } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';
import { Clipboard } from '@angular/cdk/clipboard';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [QRCodeModule,TooltipModule, ButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  link = 'www.tazkty.com/473847';
  constructor(private clipboard: Clipboard) {}

  onCopy() {
    this.clipboard.copy(this.link);
  }
}
