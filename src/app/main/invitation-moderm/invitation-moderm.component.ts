import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-invitation-moderm',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './invitation-moderm.component.html',
  styleUrls: ['./invitation-moderm.component.scss']
})
export class InvitationModermComponent implements OnInit {
  // Propiedad para almacenar los días que faltan para la boda
  daysLeft: number = 0;

  // Lista de canciones
  canciones: string[] = [];

  // Fecha de la boda
  weddingDate: Date = new Date('2025-05-12T18:00:00'); // Asegúrate de colocar la fecha de tu boda aquí

  ngOnInit() {
    // Calcular los días que faltan cuando el componente se inicializa
    this.calculateDaysLeft();
  }

  // Función para calcular cuántos días faltan para la boda
  calculateDaysLeft(): void {
    const currentDate = new Date(); // Fecha y hora actual
    const timeDifference = this.weddingDate.getTime() - currentDate.getTime(); // Diferencia en milisegundos
    this.daysLeft = Math.floor(timeDifference / (1000 * 3600 * 24)); // Convertir milisegundos a días
  }

  // Función para agregar una canción a la lista
  agregarCancion(event: any): void {
    const cancion = event.target.value; // Obtén el valor del input
    if (cancion) {
      this.canciones.push(cancion); // Agrega la canción a la lista
      event.target.value = ''; // Limpiar el input después de agregar la canción
    }
  }

  // Función para confirmar asistencia
  confirmarAsistencia(): void {
    // Lógica para confirmar asistencia
    alert('¡Gracias por confirmar tu asistencia!');
    // Aquí puedes agregar más lógica, como redirigir a una página de agradecimiento, guardar en una base de datos, etc.
  }
}

