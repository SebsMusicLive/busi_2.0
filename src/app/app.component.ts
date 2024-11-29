import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { FooterComponent } from "./footer/footer.component";
import { InicioComponent } from "./inicio/inicio.component";
import { SobreNosotrosComponent } from "./sobre-nosotros/sobre-nosotros.component";
import { WhatsappComponent } from "./whatsapp/whatsapp.component";
import { ContactanosComponent } from "./contactanos/contactanos.component";
import { EstadisticasComponent } from "./estadisticas/estadisticas.component";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ContactEmailComponent } from './contact-email/contact-email.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, InicioComponent, SobreNosotrosComponent, WhatsappComponent, ContactanosComponent, EstadisticasComponent, HttpClientModule, FormsModule, ContactEmailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web-project';
}
