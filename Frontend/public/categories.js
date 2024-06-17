const categories = [
    {
        "category": "Accordion",
        "description": "Accordion is used for showing and hiding content but only one item can stay open at a time.",
        "image": "../src/assets/radial.jpg"
    },
    {
        "category": "Alert",
        "description": "Alert informs users about important events.",
        "image": "../src/assets/star.jpg"
    },
    {
        "category": "Artboard",
        "description": "Artboard provides fixed size container to display a demo content on mobile size.",
        "image": "../src/assets/radial.jpg"
    },
    {
        "category": "Avatar",
        "description": "Avatars are used to show a thumbnail representation of an individual or business in the interface.",
        "image": "https://drive.google.com/file/d/1YGJAa6rlTBfhlGKn-alifrcz9Wr6C0a6/view?usp=sharing"
    },
    {
        "category": "Badge",
        "description": "Badges are used to inform the user of the status of specific data.",
        "image": "badge.png"
    },
    {
        "category": "Bottom navigation",
        "description": "Bottom navigation bar allows navigation between primary screens.",
        "image": "bottom_navigation.png"
    },
    {
        "category": "Breadcrumbs",
        "description": "Breadcrumbs helps users to navigate through the website.",
        "image": "https://drive.google.com/file/d/1I-wraJTTrPRgKdQojrcPBGBzT_5795cc/view?usp=drive_link"
    },
    {
        "category": "Button",
        "description": "Buttons allow the user to take actions or make choices.",
        "image": "https://drive.google.com/file/d/1vQpvOa0HzogLPPA7pzlGxYs8NmsaG9zM/view?usp=drive_link"
    },
    {
        "category": "Card",
        "description": "Cards are used to group and display content in a way that is easily readable.",
        "image": "https://drive.google.com/file/d/1jh6rY_Pw_dRfqnbMFWXbOTS-TF93CU2b/view?usp=drive_link"
    },
    {
        "category": "Carousel",
        "description": "Carousel show images or content in a scrollable area.",
        "image": "carousel.png"
    },
    {
        "category": "Chat bubble",
        "description": "Chat bubbles are used to show one line of conversation and all its data, including the author image, author name, time, etc.",
        "image": "chat_bubble.png"
    },
    {
        "category": "Checkbox",
        "description": "Checkboxes are used to select or deselect a value.",
        "image": "checkbox.png"
    },
    {
        "category": "Collapse",
        "description": "Collapse is used for showing and hiding content.",
        "image": "collapse.png"
    },
    {
        "category": "Countdown",
        "description": "Countdown gives you a transition effect of changing numbers.",
        "image": "countdown.png"
    },
    {
        "category": "Diff",
        "description": "Diff category shows a side-by-side comparison of two items.",
        "image": "diff.png"
    },
    {
        "category": "Divider",
        "description": "Divider will be used to separate content vertically or horizontally.",
        "image": "divider.png"
    },
    {
        "category": "Drawer",
        "description": "Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page.",
        "image": "drawer.png"
    },
    {
        "category": "Dropdown",
        "description": "Dropdown can open a menu or any other element when the button is clicked.",
        "image": "dropdown.png"
    },
    {
        "category": "File Input",
        "description": "File Input is an input field for uploading files.",
        "image": "file_input.png"
    },
    {
        "category": "footer",
        "description": "Footer can contain logo, copyright notice, and links to other pages.",
        "image": "footer.png"
    },
    {
        "category": "Hero",
        "description": "Hero is a category for displaying a large box or image with a title and description.",
        "image": "hero.png"
    },
    {
        "category": "Indicator",
        "description": "Indicators are used to place an element on the corner of another element.",
        "image": "indicator.png"
    },
    {
        "category": "Join",
        "description": "Join is a container for grouping multiple items, it can be used to group buttons, inputs, or any other element. ",
        "image": "join.png"
    },
    {
        "category": "Kbd",
        "description": "Kbd is used to display keyboard shortcuts.",
        "image": "kbd.png"
    },
    {
        "category": "Link",
        "description": "Link adds the missing underline style to links.",
        "image": "link.png"
    },
    {
        "category": "Loading",
        "description": "Loading shows an animation to indicate that something is loading.",
        "image": "loading.png"
    },
    {
        "category": "Mask",
        "description": "Mask crops the content of the element to common shapes.",
        "image": "mask.png"
    },
    {
        "category": "Menu",
        "description": "Menu is used to display a list of links vertically or horizontally.",
        "image": "menu.png"
    },
    {
        "category": "Browser mockup",
        "description": "Browser mockup shows a box that looks like a browser window.",
        "image": "browser_mockup.png"
    },
    {
        "category": "Code mockup",
        "description": "Code mockup is used to show a block of code in a box that looks like a code editor.",
        "image": "code_mockup.png"
    },
    {
        "category": "Phone mockup",
        "description": "Phone mockup shows a mockup of an iPhone.",
        "image": "phone_mockup.png"
    },
    {
        "category": "Window mockup",
        "description": "Window mockup shows a box that looks like an operating system window.",
        "image": "window_mockup.png"
    },
    {
        "category": "Modal",
        "description": "Modal is used to show a dialog or a box when you click a button.",
        "image": "modal.png"
    },
    {
        "category": "Navbar",
        "description": "Navbar is used to show a navigation bar on the top of the page.",
        "image": "https://drive.google.com/file/d/1zvFEtPgMrOdJ0vhIu9ztJFKW0QrId2fr/view?usp=drive_link"
    },
    {
        "category": "Pagination",
        "description": "Pagination is a group of buttons that allow the user to navigate between a set of related content.",
        "image": "https://drive.google.com/file/d/1YGJAa6rlTBfhlGKn-alifrcz9Wr6C0a6/view?usp=drive_link"
    },
    {
        "category": "Progress",
        "description": "Progress bar can be used to show the progress of a task or to show the passing of time.",
        "image": "progress.png"
    },
    {
        "category": "Radial progress",
        "description": "Radial progress can be used to show the progress of a task or to show the passing of time.",
        "image": "https://drive.google.com/file/d/1o-tZCXZtgU_nsotkcikl2n6MF6ifFbav/view?usp=drive_link"
    },
    {
        "category": "Radio",
        "description": "Radio buttons allow the user to select one option from a set.",
        "image": "radio.png"
    },
    {
        "category": "Range slider",
        "description": "Range slider is used to select a value by sliding a handle.",
        "image": "range_slider.png"
    },
    {
        "category": "Rating",
        "description": "Rating is a set of radio buttons that allow the user to rate something.",
        "image": "https://drive.google.com/file/d/1J_lj2JW-98Do65_c1nGwJ8xeWbPxq058/view?usp=drive_link"
    },
    {
        "category": "Select",
        "description": "Select is used to pick a value from a list of options.",
        "image": "select.png"
    },
    {
        "category": "Skeleton",
        "description": "Skeleton is a category that can be used to show a loading state of a category.",
        "image": "https://drive.google.com/file/d/1DFd_S1RlKesojNd4ySB3FXOhU9Vkrkvt/view?usp=drive_link"
    },
    {
        "category": "Stack",
        "description": "Stack visually puts elements on top of each other.",
        "image": "stack.png"
    },
    {
        "category": "Stat",
        "description": "Stat is used to show numbers and data in a box.",
        "image": "stat.png"
    },
    {
        "category": "Steps",
        "description": "Steps can be used to show a list of steps in a process.",
        "image": "steps.png"
    },
    {
        "category": "Swap",
        "description": "Swap allows you to toggle the visibility of two elements using a checkbox or a class name.",
        "image": "swap.png"
    },
    {
        "category": "Tabs",
        "description": "Tabs can be used to show a list of links in a tabbed format.",
        "image": "tabs.png"
    },
    {
        "category": "Table",
        "description": "Table can be used to show a list of data in a table format.",
        "image": "table.png"
    },
    {
        "category": "Textarea",
        "description": "Textarea allows users to enter text in multiple lines.",
        "image": "textarea.png"
    },
    {
        "category": "Theme Controller",
        "description": "If a checked checkbox input or a checked radio input with theme-controller class exists in the page. ",
        "image": "theme_controller.png"
    },
    {
        "category": "Timeline",
        "description": "Timeline category shows a list of events in chronological order.",
        "image": "timeline.png"
    },
    {
        "category": "Toast",
        "description": "Toast is a wrapper to stack elements, positioned on the corner of page.",
        "image": "https://drive.google.com/file/d/1NTEvakeuuQeKkwqcKAZ_zQmTF7ku1XC2/view?usp=drive_link"
    },
    {
        "category": "Toggle",
        "description": "Toggle is a checkbox that is styled to look like a switch button.",
        "image": "toggle.png"
    },
    {
        "category": "Tooltip",
        "description": "Tooltip can be used to show a message when hovering over an element.",
        "image": "https://drive.google.com/file/d/1bdoLhG7x6U5DC9rVrSlpXyV8mFCbWrYM/view?usp=drive_link"
    }
]


export default categories;