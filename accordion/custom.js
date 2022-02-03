	/* ---------------------------------------------------------------------- */
	/*	Accordion
	/* ---------------------------------------------------------------------- */
	
	(function() {

		var $container = $('.acc-container'),
			$trigger   = $('.acc-trigger');
		
		var $container02 = $('.acc-container02'),
			$trigger02   = $('.acc-trigger02');
			
		var $container03 = $('.acc-container03'),
			$trigger03   = $('.acc-trigger03');
		
		var $container04 = $('.acc-container04'),
			$trigger04   = $('.acc-trigger04');
		
		var $container05 = $('.acc-container05'),
			$trigger05   = $('.acc-trigger05');
						
		$container.hide();
		$trigger.first().addClass('active').next().show();
		
		$container02.hide();
		$trigger02.first().addClass('active').next().show();
		
		$container03.hide();
		$trigger03.first().addClass('active').next().show();
		
		
		$container04.hide();
		$trigger04.first().addClass('active').next().show();
		
		$container05.hide();
		$trigger05.first().addClass('active').next().show();
		
		
		
		var fullWidth = $container.outerWidth(true);
		$trigger.css('width', fullWidth);
		$container.css('width', fullWidth);
		
		var fullWidth = $container02.outerWidth(true);
		$trigger02.css('width', fullWidth);
		$container02.css('width', fullWidth);
		
		
		var fullWidth = $container03.outerWidth(true);
		$trigger03.css('width', fullWidth);
		$container03.css('width', fullWidth);
		
		
		var fullWidth = $container04.outerWidth(true);
		$trigger04.css('width', fullWidth);
		$container04.css('width', fullWidth);
		
		
		var fullWidth = $container05.outerWidth(true);
		$trigger05.css('width', fullWidth);
		$container05.css('width', fullWidth);
		
		
		$trigger.on('click', function(e) {
			if( $(this).next().is(':hidden') ) {
				$trigger.removeClass('active').next().slideUp(300);
				$(this).toggleClass('active').next().slideDown(300);
			}
			e.preventDefault();
		});
		
		$trigger02.on('click', function(e) {
			if( $(this).next().is(':hidden') ) {
				$trigger02.removeClass('active').next().slideUp(300);
				$(this).toggleClass('active').next().slideDown(300);
			}
			e.preventDefault();
		});
		
		
		$trigger03.on('click', function(e) {
			if( $(this).next().is(':hidden') ) {
				$trigger03.removeClass('active').next().slideUp(300);
				$(this).toggleClass('active').next().slideDown(300);
			}
			e.preventDefault();
		});
		
		
		$trigger04.on('click', function(e) {
			if( $(this).next().is(':hidden') ) {
				$trigger04.removeClass('active').next().slideUp(300);
				$(this).toggleClass('active').next().slideDown(300);
			}
			e.preventDefault();
		});
		
		$trigger05.on('click', function(e) {
			if( $(this).next().is(':hidden') ) {
				$trigger05.removeClass('active').next().slideUp(300);
				$(this).toggleClass('active').next().slideDown(300);
			}
			e.preventDefault();
		});
		
		
		// Resize
		$(window).on('resize', function() {
			fullWidth = $container.outerWidth(true)
			$trigger.css('width', $trigger.parent().width() );
			$container.css('width', $container.parent().width() );
			$trigger02.css('width', $trigger.parent().width() );
			$container02.css('width', $container.parent().width() );
			$trigger03.css('width', $trigger.parent().width() );
			$container03.css('width', $container.parent().width() );
			$trigger04.css('width', $trigger.parent().width() );
			$container04.css('width', $container.parent().width() );
			$trigger05.css('width', $trigger.parent().width() );
			$container05.css('width', $container.parent().width() );
		});

	})();