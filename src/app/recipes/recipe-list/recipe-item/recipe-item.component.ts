import { Component, OnInit, Input, TemplateRef } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';


import { Recipe } from '../../recipe.model';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  modalRef: BsModalRef;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private modalService: BsModalService) {
  }

  ngOnInit() {
  }
  openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
  }
  closeModal() {
      this.router.navigate(['/recipes']);
      this.modalService.hide(1);
  }
}


