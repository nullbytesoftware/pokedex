import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  constructor() {}

  @Input() currentPageIndex: number = 0;
  @Input() pageCount: number;
  @Output() onIndexChanged: EventEmitter<number> = new EventEmitter<number>();

  math = Math;

  get pagesArray() {
    return [...Array(this.pageCount).keys()];
  }

  ngOnInit(): void {}
  onPageClicked(index: number) {
    this.currentPageIndex = index;
    this.emitCurrentIndex();
  }
  onNext() {
    if (this.currentPageIndex + 1 < this.pageCount) {
      this.currentPageIndex++;
      this.emitCurrentIndex();
    }
  }
  onPrevious() {
    if (this.currentPageIndex > 0) {
      this.currentPageIndex--;
      this.emitCurrentIndex();
    }
  }

  emitCurrentIndex() {
    this.onIndexChanged.emit(this.currentPageIndex);
  }
}
