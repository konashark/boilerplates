console.log("Javascript is alive!");

window.addEventListener("load", initApp, false);

function PanelMenu(parent, params) {

    this.panels = [];
    this.menuElem;

    this.createMenu = function (params) {
        menu = $('<div class="menuContainer"></div>');
        if (params) {
            $(menu).css(params);
        }

        var numPanels = 1;
        if (params && params.numPanels) {
            numPanels = params.numPanels;
        }
        for (var i = 0; i < numPanels; i++) {
            this.panels[i] = this.addPanel(i, params);
        }
        return menu;
    };

    this.addPanel = function (panelIdx, params) {
        var panel = $('<div class="menuPanel"></div>');
        panel[0].userPanelIdx = panelIdx;
        $(menu).append(panel);
        return panel;
    };

    this.addMenuItem = function (params) {
        var item = $(
            '<div class="menuItem">' +
            '   <div class="menuItemText">' + params.label + '</div>' +
            '</div>');

        $(item)[0].userParams = params;

        this.installClickHandler(item);
        this.panels[params.panelIdx].append(item);
        return item;
    };

    this.addSubMenuItem = function (params) {
        var item = this.addMenuItem(params);
        item.find('.menuItemText').append('<span class="menuCaret glyphicon glyphicon-chevron-right">></span>');
        item.addClass('menuSubMenuItem');
        item[0].userParams.isSubMenu = true;
        return item;
    };

    this.installClickHandler = function (item) {

        item.on('click', function(e) {
            var elem = e.currentTarget;
            var next = $(elem).parent().next('.menuPanel');
            var nextIdx;
            if (next.length) {
                nextIdx = next[0].userPanelIdx;
            }

            // If there's a user-installed callback, call it before drawing new panel
            if (elem.userParams.cb) {
                elem.userParams.cb(elem, function() {
                    if (elem.userParams.isSubMenu) {
                        this.openPanel(nextIdx);
                    } else {
                        this.closePanel(nextIdx);
                    }
                }.bind(this))
            } else {
                if (elem.userParams.isSubMenu) {
                    this.openPanel(nextIdx);
                } else {
                    this.closePanel(nextIdx);
                }
            }

            e.stopPropagation();
            e.preventDefault();
        }.bind(this));
    };

    this.openPanel = function (panelIdx) {

        this.panels[panelIdx].css('display', 'inline-block');
        // There's probably a clever CSS way to do this, but I can't find it. I you don't physically set the parent
        // container's height (vs letting HTML DOM flow determine it) then the children won't respect their elder's height
        var tallest = 0;
        for (var i = 0; i < this.panels.length; i++ ) {
            if ($(this.panels[i]).height() > tallest) {
                tallest = $(this.panels[i]).height();
            }
        }
        $(this.menuElem).height(tallest);
    };

    this.closePanel = function (panelIdx) {
        for (var i = panelIdx; i < this.panels.length; i++ ) {
            this.panels[i].css('display', 'none');
        }
    };

    this.emptyPanel = function (panelIdx) {
        this.panels[panelIdx].empty();
    };

    this.populatePanel = function (panelIdx, itemArray) {
        this.panels[panelIdx].empty();

        for (var i = 0; i < itemArray.length; i++) {
            var params = itemArray[i];
            params.panelIdx = panelIdx;

            // If leading character is a '>' - that's a convenience way of saying it's a sub-menu
            if (params.label.charAt(0) === '>') {
                params.label = params.label.slice(1); // Chop off the leading character
                this.addSubMenuItem(params);
            } else {
                this.addMenuItem(params);
            }
        }
    };

    // Kick it off... create the main menu element using passed in parameters
    this.menuElem = this.createMenu(params);
    $(parent).append(this.menuElem);
}

function initApp () {
    console.log("Initializing...");

    var menuClickHandler = function (elem, cb) {
        var cat = elem.userParams.category;
        console.log('Click on ' + elem.userParams.label + ': Category ' + cat);

        if (cat === 106) {
            menu.populatePanel(1, [
                { label: '>Alien',      category: 200,  cb: menuClickHandler },
                { label: '>Star Trek',  category: 201,  cb: menuClickHandler },
                { label: '>Star Wars',  category: 202,  cb: menuClickHandler },
                { label: 'Favorites',   category: 203,  cb: menuClickHandler }
            ]);
        }

        if (cat === 200) {
            menu.populatePanel(2, [
                { label: 'Alien',       category: 300,  cb: menuClickHandler },
                { label: 'Aliens',      category: 301,  cb: menuClickHandler },
                { label: 'Alien 3',     category: 302,  cb: menuClickHandler }
            ]);
        }

        cb();
    };

    var menu = new PanelMenu($('#screen'), { left: 100, top: 100, width: 840, numPanels: 3 });

    menu.populatePanel(0, [
        { label: 'Favorites',   category: 100,  cb: menuClickHandler },
        { label: '>Action',     category: 101,  cb: menuClickHandler },
        { label: '>Adult',      category: 102,  cb: menuClickHandler },
        { label: '>Comedy',     category: 103,  cb: menuClickHandler },
        { label: '>Drama',      category: 104,  cb: menuClickHandler },
        { label: '>Horror',     category: 105,  cb: menuClickHandler },
        { label: '>Science Fiction', category: 106,  cb: menuClickHandler },
        { label: '>TV',         category: 107,  cb: menuClickHandler }
    ]);

    menu.openPanel(0);

}



