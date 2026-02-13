import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Specification {
  label: string;
  value: string;
}

@Component({
  selector: 'app-specifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './specifications.html',
  styleUrl: './specifications.css'
})
export class Specifications {
  motorSpecs: Specification[] = [
    { label: 'Tipo', value: 'Monocilíndrico, 4 tiempos, SOHC' },
    { label: 'Cilindrada', value: '249 cc' },
    { label: 'Potencia máxima', value: '26.5 HP @ 9,300 rpm' },
    { label: 'Torque máximo', value: '22.6 Nm @ 7,300 rpm' },
    { label: 'Sistema de refrigeración', value: 'Por aceite (SOCS)' }
  ];

  chasisSpecs: Specification[] = [
    { label: 'Tipo de frenos', value: 'Disco delantero y trasero con ABS' },
    { label: 'Suspensión delantera', value: 'Telescópica' },
    { label: 'Suspensión trasera', value: 'Monoamortiguador' },
    { label: 'Capacidad de combustible', value: '12 litros' },
    { label: 'Peso en seco', value: '156 kg' }
  ];
}