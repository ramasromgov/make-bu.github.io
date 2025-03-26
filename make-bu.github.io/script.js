

const placeList = document.getElementsByClassName('cart-btn');

let totalCostElem = document.getElementById('total-cost');
let totalCostInt = 0;

  for(const place of placeList){
    place.addEventListener('click', function (e){
      const childList = e.target.parentNode.childNodes
      const placeName = childList[1].innerText;
      const cost = (childList[3].innerText).split('$')[0];
      const costText = cost.split(' ')[1];
      const costInt = parseFloat(costText)

      console.log(costInt)
      
      const tableHead = document.getElementById('table-head');
      tableHead.classList.remove('hidden')

      const tableBody = document.getElementById('table-body');

      const tableRow = document.createElement('tr');

      const placeNameElem = document.createElement('td');
      placeNameElem.classList = 'text-left';
      placeNameElem.innerText = placeName;
      const costElem = document.createElement('td');
      costElem.classList = 'text-right'
      costElem.innerText = costInt;

      totalCostInt += costInt;
      totalCostElem.innerText = totalCostInt;

      tableRow.append(placeNameElem, costElem)
      tableBody.appendChild(tableRow)
      
    })
  }


const busBtn = document.getElementById('btn-bus');
const trainBtn = document.getElementById('train-btn');
const flightBtn = document.getElementById('btn-flight');

const clickedWay = () => {
  
}