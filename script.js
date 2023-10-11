let div_container = document.createElement('div')
div_container.setAttribute('class','container')
let div_row = document.createElement('div');
div_row.setAttribute('class','row')
let div_col = document.createElement('class','col')
div_col.innerHTML="This is tag";
div_row.append(div_col);
div_container.append(div_row);
document.body.append(div_container)