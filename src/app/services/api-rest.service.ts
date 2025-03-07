import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://172.17.131.10:3000'; 

  subirImagen(file: File): Observable<{ imageUrl: string }> {
    const formData = new FormData();
    formData.append('image', file);

    return this.http.post<{ imageUrl: string }>(`${this.apiUrl}/upload`, formData);
  }

  private productos: any[] = [];

  // Obtener productos
  getProductos(): any[] {
    return this.productos;
  }

  // Añadir producto
  añadirProducto(producto: any): void {
    this.productos.push(producto);
    alert('Producto añadido correctamente: ' + producto.Referencia + ' ' + producto.Nombre);
  }

  productoExistente(referencia: string): boolean {
    return this.productos.some(producto => producto.Referencia === referencia);
  }

  getProductoReferencia(referencia: string): any {
    return this.productos.find(producto => producto.Referencia === referencia);
  }
}
