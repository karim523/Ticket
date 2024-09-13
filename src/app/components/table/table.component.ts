import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { FileSaverModule, FileSaverService } from 'ngx-filesaver';

interface Customer {
  id: string;
  name: string;
  price: number;
  phone: string;
  status: string;
  cinema: string;
  numPeople: number;
  numPurshuse: string;
  ticket: any;
  hash: number;
  img: string;
}
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule, ButtonModule, TooltipModule, FileSaverModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  constructor(private fileSaverService: FileSaverService) { }

  saveFile() {
    const blob = new Blob(['Hello, world!'], { type: 'text/plain;charset=utf-8' });
    this.fileSaverService.save(blob, 'example.txt');
  }
  customers: Customer[] = [
    {
      hash: 1,
      id: 'C-101',
      name: 'أحمد محمود',
      price: 40,
      phone: '0123456789',
      status: 'موجود',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numPeople: 1,
      numPurshuse: 'مرة واحدة',
      ticket: 'pdf.تذكرة رقم 45 ',
      img: './assets/images/1.png',
    },
    {
      hash: 2,
      id: 'C-102',
      name: 'محمد الغريب',
      price: 30,
      phone: '0123456789',
      status: 'متاح',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numPeople: 1,
      numPurshuse: 'مرة واحدة',
      ticket: 'pdf.تذكرة رقم 45 ',
      img: './assets/images/2.png',
    },
    {
      hash: 3,
      id: 'C-102',
      name: 'محمد الغريب',
      price: 45,
      phone: '0123456789',
      status: 'متاح',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numPeople: 1,
      numPurshuse: 'مرة واحدة',
      ticket: 'pdf.تذكرة رقم 45 ',
      img: './assets/images/3.png',
    },
    {
      hash: 4,
      id: 'C-103',
      name: 'محمد الغريب',
      price: 54,
      phone: '0123456789',
      status: 'متاح',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numPeople: 1,
      numPurshuse: 'مرة واحدة',
      ticket: 'pdf.تذكرة رقم 45 ',
      img: './assets/images/4.png',
    },
    {
      hash: 1,
      id: 'C-101',
      name: 'أحمد محمود',
      price: 40,
      phone: '0123456789',
      status: 'موجود',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numPeople: 1,
      numPurshuse: 'مرة واحدة',
      ticket: 'pdf.تذكرة رقم 45 ',
      img: './assets/images/1.png',
    },
    {
      hash: 2,
      id: 'C-102',
      name: 'محمد الغريب',
      price: 30,
      phone: '0123456789',
      status: 'متاح',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numPeople: 1,
      numPurshuse: 'مرة واحدة',
      ticket: 'pdf.تذكرة رقم 45 ',
      img: './assets/images/2.png',
    },
    {
      hash: 3,
      id: 'C-102',
      name: 'محمد الغريب',
      price: 45,
      phone: '0123456789',
      status: 'متاح',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numPeople: 1,
      numPurshuse: 'مرة واحدة',
      ticket: 'pdf.تذكرة رقم 45 ',
      img: './assets/images/3.png',
    },
    {
      hash: 4,
      id: 'C-103',
      name: 'محمد الغريب',
      price: 54,
      phone: '0123456789',
      status: 'متاح',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numPeople: 1,
      numPurshuse: 'مرة واحدة',
      ticket: 'pdf.تذكرة رقم 45 ',
      img: './assets/images/4.png',
    },
    {
      hash: 1,
      id: 'C-101',
      name: 'أحمد محمود',
      price: 40,
      phone: '0123456789',
      status: 'موجود',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numPeople: 1,
      numPurshuse: 'مرة واحدة',
      ticket: 'pdf.تذكرة رقم 45 ',
      img: './assets/images/1.png',
    },
    {
      hash: 2,
      id: 'C-102',
      name: 'محمد الغريب',
      price: 30,
      phone: '0123456789',
      status: 'متاح',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numPeople: 1,
      numPurshuse: 'مرة واحدة',
      ticket: 'pdf.تذكرة رقم 45 ',
      img: './assets/images/2.png',
    },
    {
      hash: 3,
      id: 'C-102',
      name: 'محمد الغريب',
      price: 45,
      phone: '0123456789',
      status: 'متاح',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numPeople: 1,
      numPurshuse: 'مرة واحدة',
      ticket: 'pdf.تذكرة رقم 45 ',
      img: './assets/images/3.png',
    },
    {
      hash: 4,
      id: 'C-103',
      name: 'محمد الغريب',
      price: 54,
      phone: '0123456789',
      status: 'متاح',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numPeople: 1,
      numPurshuse: 'مرة واحدة',
      ticket: 'pdf.تذكرة رقم 45 ',
      img: './assets/images/4.png',
    },

    {
      hash: 1,
      id: 'C-101',
      name: 'أحمد محمود',
      price: 40,
      phone: '0123456789',
      status: 'موجود',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numPeople: 1,
      numPurshuse: 'مرة واحدة',
      ticket: 'pdf.تذكرة رقم 45 ',
      img: './assets/images/1.png',
    },
    {
      hash: 2,
      id: 'C-102',
      name: 'محمد الغريب',
      price: 30,
      phone: '0123456789',
      status: 'متاح',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numPeople: 1,
      numPurshuse: 'مرة واحدة',
      ticket: 'pdf.تذكرة رقم 45 ',
      img: './assets/images/2.png',
    },
    {
      hash: 3,
      id: 'C-102',
      name: 'محمد الغريب',
      price: 45,
      phone: '0123456789',
      status: 'متاح',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numPeople: 1,
      numPurshuse: 'مرة واحدة',
      ticket: 'pdf.تذكرة رقم 45 ',
      img: './assets/images/3.png',
    },
    {
      hash: 4,
      id: 'C-103',
      name: 'محمد الغريب',
      price: 54,
      phone: '0123456789',
      status: 'متاح',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numPeople: 1,
      numPurshuse: 'مرة واحدة',
      ticket: 'pdf.تذكرة رقم 45 ',
      img: './assets/images/4.png',
    },
    {
      hash: 1,
      id: 'C-101',
      name: 'أحمد محمود',
      price: 40,
      phone: '0123456789',
      status: 'موجود',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numPeople: 1,
      numPurshuse: 'مرة واحدة',
      ticket: 'pdf.تذكرة رقم 45 ',
      img: './assets/images/1.png',
    },
    {
      hash: 2,
      id: 'C-102',
      name: 'محمد الغريب',
      price: 30,
      phone: '0123456789',
      status: 'متاح',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numPeople: 1,
      numPurshuse: 'مرة واحدة',
      ticket: 'pdf.تذكرة رقم 45 ',
      img: './assets/images/2.png',
    },
    {
      hash: 3,
      id: 'C-102',
      name: 'محمد الغريب',
      price: 45,
      phone: '0123456789',
      status: 'متاح',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numPeople: 1,
      numPurshuse: 'مرة واحدة',
      ticket: 'pdf.تذكرة رقم 45 ',
      img: './assets/images/3.png',
    },
    {
      hash: 4,
      id: 'C-103',
      name: 'محمد الغريب',
      price: 54,
      phone: '0123456789',
      status: 'متاح',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numPeople: 1,
      numPurshuse: 'مرة واحدة',
      ticket: 'pdf.تذكرة رقم 45 ',
      img: './assets/images/4.png',
    },
    {
      hash: 1,
      id: 'C-101',
      name: 'أحمد محمود',
      price: 40,
      phone: '0123456789',
      status: 'موجود',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numPeople: 1,
      numPurshuse: 'مرة واحدة',
      ticket: 'pdf.تذكرة رقم 45 ',
      img: './assets/images/1.png',
    },
    {
      hash: 2,
      id: 'C-102',
      name: 'محمد الغريب',
      price: 30,
      phone: '0123456789',
      status: 'متاح',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numPeople: 1,
      numPurshuse: 'مرة واحدة',
      ticket: 'pdf.تذكرة رقم 45 ',
      img: './assets/images/2.png',
    },
    {
      hash: 3,
      id: 'C-102',
      name: 'محمد الغريب',
      price: 45,
      phone: '0123456789',
      status: 'متاح',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numPeople: 1,
      numPurshuse: 'مرة واحدة',
      ticket: 'pdf.تذكرة رقم 45 ',
      img: './assets/images/3.png',
    },
    {
      hash: 4,
      id: 'C-103',
      name: 'محمد الغريب',
      price: 54,
      phone: '0123456789',
      status: 'متاح',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numPeople: 1,
      numPurshuse: 'مرة واحدة',
      ticket: 'pdf.تذكرة رقم 45 ',
      img: './assets/images/4.png',
    },
    {
      hash: 1,
      id: 'C-101',
      name: 'أحمد محمود',
      price: 40,
      phone: '0123456789',
      status: 'موجود',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numPeople: 1,
      numPurshuse: 'مرة واحدة',
      ticket: 'pdf.تذكرة رقم 45 ',
      img: './assets/images/1.png',
    },
    {
      hash: 2,
      id: 'C-102',
      name: 'محمد الغريب',
      price: 30,
      phone: '0123456789',
      status: 'متاح',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numPeople: 1,
      numPurshuse: 'مرة واحدة',
      ticket: 'pdf.تذكرة رقم 45 ',
      img: './assets/images/2.png',
    },
    {
      hash: 3,
      id: 'C-102',
      name: 'محمد الغريب',
      price: 45,
      phone: '0123456789',
      status: 'متاح',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numPeople: 1,
      numPurshuse: 'مرة واحدة',
      ticket: 'pdf.تذكرة رقم 45 ',
      img: './assets/images/3.png',
    },
    {
      hash: 4,
      id: 'C-103',
      name: 'محمد الغريب',
      price: 54,
      phone: '0123456789',
      status: 'متاح',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numPeople: 1,
      numPurshuse: 'مرة واحدة',
      ticket: 'pdf.تذكرة رقم 45 ',
      img: './assets/images/4.png',
    },
    {
      hash: 1,
      id: 'C-101',
      name: 'أحمد محمود',
      price: 40,
      phone: '0123456789',
      status: 'موجود',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numPeople: 1,
      numPurshuse: 'مرة واحدة',
      ticket: 'pdf.تذكرة رقم 45 ',
      img: './assets/images/1.png',
    },
    {
      hash: 2,
      id: 'C-102',
      name: 'محمد الغريب',
      price: 30,
      phone: '0123456789',
      status: 'متاح',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numPeople: 1,
      numPurshuse: 'مرة واحدة',
      ticket: 'pdf.تذكرة رقم 45 ',
      img: './assets/images/2.png',
    },
    {
      hash: 3,
      id: 'C-102',
      name: 'محمد الغريب',
      price: 45,
      phone: '0123456789',
      status: 'متاح',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numPeople: 1,
      numPurshuse: 'مرة واحدة',
      ticket: 'pdf.تذكرة رقم 45 ',
      img: './assets/images/3.png',
    },
    {
      hash: 4,
      id: 'C-103',
      name: 'محمد الغريب',
      price: 54,
      phone: '0123456789',
      status: 'متاح',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numPeople: 1,
      numPurshuse: 'مرة واحدة',
      ticket: 'pdf.تذكرة رقم 45 ',
      img: './assets/images/4.png',
    },
  ];

  first = 0;

  rows = 10;

  ngOnInit() {}

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  pageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  isLastPage(): boolean {
    return this.customers
      ? this.first === this.customers.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.customers ? this.first === 0 : true;
  }
}
