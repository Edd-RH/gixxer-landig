import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Financing } from './components/financing/financing';
import { Benefits } from './components/benefits/benefits';
import { Specifications } from './components/specifications/specifications';
import { Cta } from './components/cta/cta';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Header,
    Hero,
    Financing,
    Benefits,
    Specifications,
    Cta,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'gixxer-landing';
}