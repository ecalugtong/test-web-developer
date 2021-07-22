var images = {
	man: {
		heading: 'Man Image',
		description: 'Image of a man.',
		path: 'img/man.jpg'
	},
	wizard: {
		heading: 'Wizard Image',
		description: 'Image of a wizard.',
		path: 'img/wizard.jpg'
	},
	beast: {
		heading: 'Beast Image',
		description: 'Image of a beast.',
		path: 'img/beast.jpg'
	}
};

let imageArray = [images.man, images.wizard, images.beast];

window.onload = () => {

	for (let image of imageArray) {
		document.getElementById('images').innerHTML += `
			<div class = 'col-md-4'>
				<div class = 'image-box'>
					<a href = '#'>
						<div class='text'>
							<b>${image.heading}</b>
							<span>${image.description}</span>
						</div>

						<img src = ${image.path} >
					</a>
				</div>
			</div>
		`
	}
}


// Dropdown 
$(document).ready(function(){
  $('.dropdown-toggle').on("click", function(e){
    $(this).parent().toggleClass('open');
         e.stopPropagation();
         e.preventDefault();
        });
    });

    $('body').on('click', function (e) {
       if (!$('dropdown-toggle').is(e.target) 
          && $('dropdown-toggle').has(e.target).length === 0 
          && $('.open').has(e.target).length === 0
       ) {
          $('dropdown-toggle').removeClass('open');
       }
});      