import Vue from 'vue';
import convert from 'convert-length';

const performPageBreak = el => {
  // get the viewport's amount of pixels in 11 inches
  const resumePageLength = convert(11, 'in', 'px');
  const elBoundingRect = el.getBoundingClientRect();

  const pageForEl = Math.ceil(elBoundingRect.top / resumePageLength);

  // check to see if the top of the DOM element is above a page break
  // and the bottom is below a page break
  const isBetweenPages =
    pageForEl * elBoundingRect.top < resumePageLength * pageForEl &&
    pageForEl * elBoundingRect.bottom > resumePageLength * pageForEl;

  if (isBetweenPages) {
    const pageBreakMargin =
      resumePageLength - (elBoundingRect.top % resumePageLength) * pageForEl;

    const pageBreakEl = document.createElement('div');
    pageBreakEl.className = 'page-break';
    pageBreakEl.style.height = '0';
    pageBreakEl.style.width = '1000%';
    pageBreakEl.style.backgroundColor = '#333';
    pageBreakEl.style.marginTop = `${pageBreakMargin}px`;
    pageBreakEl.style.marginLeft = '-50%';
    el.before(pageBreakEl);
  }
};

Vue.directive('page-breakable', {
  inserted(el) {
    performPageBreak(el);
  },
  updated(el) {
    performPageBreak(el);
  },
  componentUpdated(el) {
    performPageBreak(el);
  }
});
