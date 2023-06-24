const tabList = document.querySelector('[role="tab-list"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener('keydown', changeTabFocus);


tabs.forEach((tab) =>{
    tab.addEventListener('click', changeTabPanel)
})

function changeTabPanel (e) {
 const targetTab = e.target;
 const targetPanel = targetTab.getAttribute('aria-controls');
 const targetImage = targetTab.getAttribute('data-image');
//  this step to find the main container can  be done in one step 
//  by stringing the .parentNode
//  const tabContainer = targetTab.parentNode.parentNode;
 const tabContainer = targetTab.parentNode;
 const mainContainer = tabContainer.parentNode;
 const grandContainer = mainContainer.parentNode;

tabContainer
.querySelector('[aria-selected="true"]')
.setAttribute('aria-selected', false);

targetTab
.setAttribute('aria-selected', true);


hideContent(mainContainer, '[role="tabpanel"]');
//  mainContainer
//  .querySelectorAll('[role="tabpanel"]')
//  .forEach((panel) => panel.setAttribute('hidden', true));

// hideContent(mainContainer, 'picture');

hideContent(grandContainer, 'picture');
//  mainContainer
//  .querySelectorAll('picture')
//  .forEach((pic) => pic.setAttribute('hidden', true));

showContent(mainContainer, [`#${targetPanel}`]);

//  mainContainer.querySelector([`#${targetPanel}`]).removeAttribute('hidden');

// showContent(mainContainer,[`#${targetImage}`]);

showContent(grandContainer,[`#${targetImage}`]);

//  mainContainer.querySelector([`#${targetImage}`]).removeAttribute('hidden');
//  console.log(tabContainer);
}


function hideContent (parent,content) {
parent
 .querySelectorAll(content)
 .forEach((element) => element.setAttribute('hidden', true));
}
function showContent (parent, content) {
    parent.querySelector(content).removeAttribute('hidden');
}



let tabFocus = 0;
    function changeTabFocus(e){

        const keyDownLeft = 37;
        const keyDownRight = 39; 
        
        if (e.keyCode === keyDownLeft || e.keyCode === keyDownRight){
            tabs[tabFocus].setAttribute("tabindex",-1);
        }
    
        if (e.keyCode === keyDownRight) {
            tabFocus++
            if (tabFocus >= tabs.length){
                tabFocus = 0;
            }
        }
        if (e.keyCode === keyDownLeft) {
            tabFocus--
            if (tabFocus < 0){
                tabFocus = tabs.length -1;
            }}
        tabs[tabFocus].setAttribute("tabindex",0);
        tabs[tabFocus].focus();
    }


   

