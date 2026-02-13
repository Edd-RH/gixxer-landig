import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FinancingPlan {
  plazo: string;
  enganche: string;
  pagoSemanal: string;
  popular: boolean;
}

@Component({
  selector: 'app-financing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './financing.html',
  styleUrl: './financing.css'
})
export class Financing {
  plans: FinancingPlan[] = [
    { plazo: '1 año', enganche: '$4,350', pagoSemanal: '$2,465', popular: false },
    { plazo: '2 años', enganche: '$4,350', pagoSemanal: '$1,768', popular: true },
    { plazo: '3 años', enganche: '$4,350', pagoSemanal: '$1,591', popular: false }
  ];

  requirements: string[] = [
    'Identificación oficial (INE o CURP)',
    'Comprobante de domicilio',
    'Comprobante de ingresos',
    'Autorizar Consulta Buró de Crédito'
  ];
}