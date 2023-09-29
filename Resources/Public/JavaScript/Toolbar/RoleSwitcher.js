/***************************************************************
 *  Copyright notice
 *
 *  (c) 2016 Nicole Cordes <cordes@cps-it.de>, CPS-IT GmbH
 *
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

/**
 * Module: TYPO3/CMS/BegroupsRoles/Toolbar/RoleSwitcher
 */
define(['jquery'], function($) {
	'use strict';

	$(
		$('#ichhabrecht-begroupsroles-backend-toolbaritems-roleswitcher').on('click', '.dropdown-menu a', function(evt) {
			evt.preventDefault();
			$.ajax({
				url: TYPO3.settings.ajaxUrls['role_switch'],
				type: 'post',
				data: {
					role: $(this).data('role')
				},
				dataType: 'json',
				success: function(data) {
					document.location.assign(data.redirectUrl);
				}
			});
		})
	);

});
