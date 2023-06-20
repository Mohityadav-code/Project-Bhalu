`let arr = [];`;
var arr = [
  {
    que: "What is the capital of France?",
    correct: "Paris",
    ans: ["London", "Paris", "Rome", "Berlin"],
    category: "Geography",
    difficulty: "Easy",
    visited: false,
    answered: false,
    marked: false,
    selectedOption: null,
    marks: 0,
    submit: false,
  },
  {
    que: "Who painted the Mona Lisa?",
    correct: "Leonardo da Vinci",
    ans: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Michelangelo",
    ],
    category: "Art",
    difficulty: "Medium",
    visited: false,
    answered: false,
    marked: false,
    selectedOption: null,
    marks: 0,
    submit: false,
  },
];

class object {
  constructor(value) {
    this.que = value;
  }
}
var difficulty = "easy";
function level() {
  divs.forEach((element) => {
    element.style.backgroundColor = "rgb(82,82,91)";
  });
  pointer = 0;
  var levelSelector = document.querySelector("#levelSelector").value;
  if (levelSelector == 1) {
    arr.length = 0;
    arr.push(
      {
        que: "The main electronic component used in first generation computers was",
        correct: "Vacuum Tubes and Valves",
        ans: [
          "Transistors",
          "Vacuum Tubes and Valves",
          "Integrated Circuits",
          "None of above",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "A dumb terminal has",
        correct: "a keyboard and screen",
        ans: [
          "an embedded microprocessor",
          "extensive memory",
          "independent processing capability",
          "a keyboard and screen",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "One millisecond is",
        correct: "1000th of a seconds",
        ans: [
          "1 second",
          "10th of a seconds",
          "1000th of a seconds",
          "10000th of a seconds",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "The output quality of a printer is measured by",
        correct: "Dot per inch",
        ans: [
          "Dot per sq. inch",
          "Dot per inch",
          "Dots printed per unit time",
          "All of the above",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Which of the following was a special purpose computer?",
        correct: "ABC",
        ans: ["ABC", "ENIAC", "EDVAC", "All of the above"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "What was the computer invented by Attanasoff and Clifford?",
        correct: "ABC",
        ans: ["Mark I", "ABC", "Z3", "None of above"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Which of the following storage devices can store maximum amount of data?",
        correct: "Hard Disk",
        ans: ["Floppy Disk", "Hard Disk", "Compact Disk", "Magneto Optic Disk"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Which computer was considered the first electronic computer until 1973 when court invalidated the patent?",
        correct: "ENIAC",
        ans: ["ENIAC", "MARK I", "Z3", "ABC"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "A physical connection between the microprocessor memory and other parts of the microcomputer is known as",
        correct: "Address bus",
        ans: ["Path", "Address bus", "Route", "All of the above"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "High density double-sided floppy disks could store _____ of data",
        correct: "1.44 MB",
        ans: ["1.40 MB", "1.44 GB", "1.40 GB", "1.44 MB"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "A high-quality CAD system uses the following for printing drawing and graphs",
        correct: "Digital plotter",
        ans: [
          "Dot matrix printer",
          "Digital plotter",
          "Line printer",
          "All of the above",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Which of the following is not an input device?",
        correct: "COM (Computer Output to Microfilm)",
        ans: [
          "OCR",
          "Optical scanners",
          "Voice recognition device",
          "COM (Computer Output to Microfilm)",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "The accuracy of the floating-point numbers representable in two 16-bit words of a computer is approximately",
        correct: "6 digits",
        ans: ["16 digits", "6 digits", "9 digits", "All of above"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "In most of the IBM PCs, the CPU, the device drivers, memory, expansion slots, and active components are mounted on a single board. What is the name of the board?",
        correct: "Motherboard",
        ans: ["Motherboard", "Daughterboard", "Bredboard", "Fatherboard"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "In most IBM PCs, the CPU, the device drives, memory expansion slots, and active components are mounted on a single board. What is the name of this board?",
        correct: "Motherboard",
        ans: [
          "Motherboard",
          "Breadboard",
          "Daughter board",
          "Grandmother board",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Magnetic disks are the most popular medium for",
        correct: "Direct access",
        ans: [
          "Direct access",
          "Sequential access",
          "Both of above",
          "None of above",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "A technique used by codes to convert an analog signal into a digital bit stream is known as",
        correct: "Pulse code modulation",
        ans: [
          "Pulse code modulation",
          "Pulse stretcher",
          "Query processing",
          "Queue management",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Regarding a VDU, which statement is more correct?",
        correct: "It is a peripheral device",
        ans: [
          "It is an output device",
          "It is an input device",
          "It is a peripheral device",
          "It is a hardware item",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "A modern electronic computer is a machine that is meant for",
        correct: "Input, storage, manipulation, and outputting of data",
        ans: [
          "Doing quick mathematical calculations",
          "Input, storage, manipulation, and outputting of data",
          "Electronic data processing",
          "Performing repetitive tasks accurately",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "When was the vacuum tube invented?",
        correct: "1906",
        ans: ["1900", "1906", "1910", "1880"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      }
    );
  }
  if (levelSelector == 2) {
    arr.length = 0;
    arr.push(
      {
        que: "Which of the following produces the best quality graphics reproduction?",
        correct: "Plotter",
        ans: [
          "Laser printer",
          "Ink jet printer",
          "Plotter",
          "Dot matrix printer",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Computers with 80286 microprocessor is",
        correct: "AT computers",
        ans: ["XT computer", "AT computers", "PS/2 computer", "None of above"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "An application suitable for sequential processing is",
        correct: "Both a and b",
        ans: [
          "Processing of grades",
          "Payroll processing",
          "Both a and b",
          "All of above",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Which of the following is not processing?",
        correct: "Gathering",
        ans: ["Arranging", "Manipulating", "Calculating", "Gathering"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "The digital computer was developed primarily in",
        correct: "USA",
        ans: ["USSR", "Japan", "USA", "UK"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Software in a computer",
        correct: "Enhances the capabilities of the hardware machine",
        ans: [
          "Enhances the capabilities of the hardware machine",
          "Increases the speed of the central processing unit",
          "Both of above",
          "None of above",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Today’s computer giant IBM was earlier known by a different name which was changed in 1924. What was that name?",
        correct: "Computing Tabulating Recording Co.",
        ans: [
          "Tabulator Machine Co.",
          "Computing Tabulating Recording Co.",
          "The Tabulator Ltd.",
          "International Computer Ltd.",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Before a disk drive can access any sector record, a computer program has to provide the record’s disk address. What information does this address specify?",
        correct: "All of above",
        ans: [
          "Track number",
          "Sector number",
          "Surface number",
          "All of above",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "The arranging of data in a logical sequence is called",
        correct: "Sorting",
        ans: ["Sorting", "Classifying", "Reproducing", "Summarizing"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "What is the responsibility of the logical unit in the CPU of a computer?",
        correct: "To compare numbers",
        ans: [
          "To produce result",
          "To compare numbers",
          "To control the flow of information",
          "To do math's works",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Abacus was the first",
        correct: "Mechanical calculator",
        ans: [
          "Electronic computer",
          "Mechanical computer",
          "Electronic calculator",
          "Mechanical calculator",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "If in a computer, 16 bits are used to specify the address in a RAM, the number of addresses will be",
        correct: "65,536",
        ans: ["216", "65,536", "64K", "Any of the above"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Instructions and memory addresses are represented by",
        correct: "Binary codes",
        ans: ["Character code", "Binary codes", "Binary word", "Parity bit"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "The terminal device that functions as a cash register, computer terminal, and OCR reader is the:",
        correct: "POS terminal",
        ans: [
          "Data collection terminal",
          "OCR register terminal",
          "Video Display terminal",
          "POS terminal",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "A set of flip flops integrated together is called ____",
        correct: "Register",
        ans: ["Counter", "Adder", "Register", "None of the above"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "People often call ______ as the brain of the computer system",
        correct: "Central Processing Unit",
        ans: [
          "Control Unit",
          "Arithmetic Logic Unit",
          "Central Processing Unit",
          "Storage Unit",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Which is used for manufacturing chips?",
        correct: "Semiconductors",
        ans: ["Bus", "Control unit", "Semiconductors", "A and b only"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "The value of each bead in heaven is",
        correct: "5",
        ans: ["1", "3", "5", "7"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "The first computer introduced in Nepal was",
        correct: "IBM 1401",
        ans: ["IBM 1400", "IBM 1401", "IBM 1402", "IBM 1402"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Mnemonic, a memory trick, is used in which of the following languages?",
        correct: "Assembly language",
        ans: [
          "Machine language",
          "Assembly language",
          "High-level language",
          "None of the above",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      }
    );
  }
  if (levelSelector == 3) {
    arr.length = 0;
    arr.push(
      {
        que: "Instruction in computer languages consists of",
        correct: "Both of above",
        ans: ["OPCODE", "OPERAND", "Both of above", "None of above"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Which generation of computer is still under development",
        correct: "Fifth Generation",
        ans: [
          "Fourth Generation",
          "Fifth Generation",
          "Sixth Generation",
          "Seventh Generation",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "A register organized to allow to move left or right operations is called a ____",
        correct: "Shift register",
        ans: ["Counter", "Loader", "Adder", "Shift register"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Which was the most popular first generation computer?",
        correct: "IBM 1650",
        ans: ["IBM 1650", "IBM 360", "IBM 1130", "IBM 2700"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Which is considered a direct entry input device?",
        correct: "All of the above",
        ans: [
          "Optical scanner",
          "Mouse and digitizer",
          "Light pen",
          "All of the above",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "A set of information that defines the status of resources allocated to a process is",
        correct: "Process description",
        ans: ["Process control", "ALU", "Register Unit", "Process description"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Each set of Napier’s bones consisted of ______ rods.",
        correct: "11",
        ans: ["5", "9", "11", "13"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "BCD is",
        correct: "Binary Coded Decimal",
        ans: [
          "Binary Coded Decimal",
          "Bit Coded Decimal",
          "Binary Coded Digit",
          "Bit Coded Digit",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "When was the world’s first laptop computer introduced in the market and by whom?",
        correct: "Epson, 1981",
        ans: [
          "Hewlett-Packard, 1980",
          "Epson, 1981",
          "Laplink Traveling Software Inc, 1982",
          "Tandy Model-200, 1985",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "From which generation operating systems were developed?",
        correct: "Third",
        ans: ["First", "Second", "Third", "Fourth"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "The first firm to mass-market a microcomputer as a personal computer was",
        correct: "Radio Shaks",
        ans: ["IBM", "Super UNIVAC", "Radio Shaks", "Data General Corporation"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "How many address lines are needed to address each machine location in a 2048 x 4 memory chip?",
        correct: "11",
        ans: ["10", "11", "8", "12"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Properly arranged data is called",
        correct: "Information",
        ans: ["Field", "Words", "Information", "File"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "A computer consists of",
        correct: "All of the above",
        ans: [
          "A central processing unit",
          "A memory",
          "Input and output unit",
          "All of the above",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Why are vacuum tubes also called valves?",
        correct: "Because they can stop or allow the flow of current",
        ans: [
          "Because they can amplify the weak signals and make them strong",
          "Because they can stop or allow the flow of current",
          "Both of above",
          "None of above",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "John Napier invented Logarithm in",
        correct: "1614",
        ans: ["1614", "1617", "1620", "None of above"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "An integrated circuit is",
        correct: "Fabricated on a tiny silicon chip",
        ans: [
          "A complicated circuit",
          "An integrating device",
          "Much costlier than a single transistor",
          "Fabricated on a tiny silicon chip",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "What type of control pins are needed in a microprocessor to regulate traffic on the bus, in order to prevent two devices from trying to use it at the same time?",
        correct: "Bus arbitration",
        ans: ["Bus control", "Interrupts", "Bus arbitration", "Status"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Where as a computer mouse moves over the table surface, the trackball is",
        correct: "Stationary",
        ans: [
          "Stationary",
          "Difficult to move",
          "Dragged",
          "Moved in small steps",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Which of the following is used as a primary storage device?",
        correct: "Magnetic drum",
        ans: ["Magnetic drum", "Hard Disks", "Floppy", "All of above"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      }
    );
    pointer = 0;
    Dom();
  }
  if (levelSelector == 4) {
    arr.length = 0;
    arr.push(
      {
        que: "Multi-user systems provided cost savings for small business because they use a single processing unit to link several",
        correct: "Dumb terminals",
        ans: [
          "Personal computers",
          "Workstations",
          "Dumb terminals",
          "Mainframes",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "What are the three decision-making operations performed by the ALU of a computer?",
        correct: "All of the above",
        ans: ["Greater than", "Less than", "Equal to", "All of the above"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "The word processing task associated with changing the appearance of a document is",
        correct: "Formatting",
        ans: ["Editing", "Writing", "Formatting", "All of the above"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Nepal brought a computer for the census of 2028 BS. This computer was of",
        correct: "Second generation",
        ans: [
          "First generation",
          "Second generation",
          "Third generation",
          "Fourth generation",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Algorithm and Flowchart help us to",
        correct: "Specify the problem completely and clearly",
        ans: [
          "Know the memory capacity",
          "Identify the base of a number system",
          "Direct the output to a printer",
          "Specify the problem completely and clearly",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Which statement is valid about a computer program?",
        correct: "Both a & b",
        ans: [
          "It is understood by a computer",
          "It is understood by the programmer",
          "It is understood by the user",
          "Both a & b",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "The difference between memory and storage is that memory is _____ and storage is _____",
        correct: "Temporary, permanent",
        ans: [
          "Temporary, permanent",
          "Permanent, temporary",
          "Slow, fast",
          "All of the above",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "When was Pascaline invented?",
        correct: "1642",
        ans: ["1617", "1620", "1642", "1837"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Which of the following statements is valid?",
        correct: "All of the above",
        ans: [
          "Lady Augusta is the first programmer",
          "Ada is the daughter of Lord Byron, a famous English poet",
          "ADA is a programming language developed by US Defense",
          "All of the above",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "A compiler is a translating program which",
        correct: "All of the above",
        ans: [
          "Translates instructions of a high-level language into machine language",
          "Translates the entire source program into machine language program",
          "It is not involved in program's execution",
          "All of the above",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "What is required when more than one person uses a central computer at the same time?",
        correct: "Terminal",
        ans: ["Light pen", "Mouse", "Digitizer", "Terminal"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Which of the following is the first computer to use the Stored Program Concept?",
        correct: "EDSAC",
        ans: ["UNIVAC", "ENIAC", "EDSAC", "None of the above"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "The term gigabyte refers to",
        correct: "1024 megabytes",
        ans: [
          "1024 bytes",
          "1024 kilobytes",
          "1024 megabytes",
          "1024 gigabytes",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "In which year was the UK's premier computing event called 'The which computer?' started?",
        correct: "1980",
        ans: ["1980", "1985", "1986", "1987"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Once you load the suitable program and provide the required data, the computer does not need human intervention. This feature is known as",
        correct: "Automatic",
        ans: ["Accuracy", "Reliability", "Versatility", "Automatic"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "What is a brand?",
        correct:
          "The name of a product a company gives to identify its product in the market",
        ans: [
          "The name of companies that made computers",
          "The name of a product a company gives to identify its product in the market",
          "A name of class to indicate all similar products from different companies",
          "All of the above",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Machine language is",
        correct: "All of the above",

        ans: [
          "Machine dependent",
          "Difficult to program",
          "Error prone",
          "All of the above",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "A byte consists of",
        correct: "Eight bits",
        ans: ["One bit", "Four bits", "Eight bits", "Sixteen bits"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Modern computers are very reliable, but they are not",
        correct: "Infallible",
        ans: ["Fast", "Powerful", "Infallible", "Cheap"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "What is the date when Babbage conceived the Analytical engine",
        correct: "1837",
        ans: ["1642", "1837", "1880", "1850"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      }
    );
  }
  pointer = 0;
  Dom();
  fetchit();
}
var CategoryForApi = "Linux";
function category() {
  divs.forEach((element) => {
    element.style.backgroundColor = "rgb(82,82,91)";
  });
  pointer = 0;
  var category = document.querySelector("#category").value;
  console.log("category: ", category);
  if (category == 1) {
    arr.length = 0;
    arr.push(
      {
        que: "The basic operations performed by a computer are",
        correct: "All the above",
        ans: [
          "Arithmetic operation",
          "Logical operation",
          "Storage and relative",
          "All the above",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "UNIVAC is",
        correct: "Universal Automatic Computer",
        ans: [
          "Universal Automatic Computer",
          "Universal Array Computer",
          "Unique Automatic Computer",
          "Unvalued Automatic Computer",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "The two major types of computer chips are",
        correct: "Both b and c",
        ans: [
          "External memory chip",
          "Primary memory chip",
          "Microprocessor chip",
          "Both b and c",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Microprocessors as switching devices are for which generation computers",
        correct: "Fourth Generation",
        ans: [
          "First Generation",
          "Second Generation",
          "Third Generation",
          "Fourth Generation",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "What is the main difference between a mainframe and a supercomputer?",
        correct:
          "Supercomputers are focused to execute few programs as fast as possible while mainframe uses its power to execute as many programs concurrently",
        ans: [
          "Super computer is much larger than mainframe computers",
          "Super computers are much smaller than mainframe computers",
          "Supercomputers are focused to execute few programs as fast as possible while mainframe uses its power to execute as many programs concurrently",
          "Supercomputers are focused to execute as many programs as possible while mainframe uses its power to execute few programs as fast as possible.",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "ASCII and EBCDIC are the popular character coding systems. What does EBCDIC stand for?",
        correct: "Extended Binary Coded Decimal Interchange Code",
        ans: [
          "Extended Binary Coded Decimal Interchange Code",
          "Extended Bit Code Decimal Interchange Code",
          "Extended Bit Case Decimal Interchange Code",
          "Extended Binary Case Decimal Interchange Code",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "The brain of any computer system is",
        correct: "CPU",
        ans: ["ALU", "Memory", "CPU", "Control unit"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Storage capacity of magnetic disk depends on",
        correct: "All of above",
        ans: [
          "tracks per inch of surface",
          "bits per inch of tracks",
          "disk pack in disk surface",
          "All of above",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "The two kinds of main memory are:",
        correct: "ROM and RAM",
        ans: [
          "Primary and secondary",
          "Random and sequential",
          "ROM and RAM",
          "All of above",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "A storage area used to store data to compensate for the difference in speed at which the different units can handle data is",
        correct: "Buffer",
        ans: ["Memory", "Buffer", "Accumulator", "Address"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Computer is free from tiresome and boredom. We call it",
        correct: "Diligence",
        ans: ["Accuracy", "Reliability", "Diligence", "Versatility"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Integrated Circuits (ICs) are related to which generation of computers?",
        correct: "Third generation",
        ans: [
          "First generation",
          "Second generation",
          "Third generation",
          "Fourth generation",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "CD-ROM is a",
        correct: "None of above",
        ans: [
          "Semiconductor memory",
          "Memory register",
          "Magnetic memory",
          "None of above",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "A hybrid computer",
        correct: "Resembles both a digital and analogue computer",
        ans: [
          "Resembles digital computer",
          "Resembles analogue computer",
          "Resembles both a digital and analogue computer",
          "None of the above",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Which type of computers uses the 8-bit code called EBCDIC?",
        correct: "Mainframe computers",
        ans: [
          "Minicomputers",
          "Microcomputers",
          "Mainframe computers",
          "Super computer",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "The ALU of a computer responds to the commands coming from",
        correct: "Control section",
        ans: [
          "Primary memory",
          "Control section",
          "External memory",
          "Cache memory",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Chief component of first generation computer was",
        correct: "Vacuum Tubes and Valves",
        ans: [
          "Transistors",
          "Vacuum Tubes and Valves",
          "Integrated Circuits",
          "None of above",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "To produce high quality graphics (hard copy) in color, you would want to use a/n",
        correct: "Plotter",
        ans: ["RGB monitor", "Plotter", "Ink-jet printer", "Laser printer"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "What are the stages in the compilation process?",
        correct: "Lexical Analysis, syntax analysis, and code generation",
        ans: [
          "Feasibility study, system design and testing",
          "Implementation and documentation",
          "Lexical Analysis, syntax analysis, and code generation",
          "None of the above",
        ],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      },
      {
        que: "Which of the following IC was used in the third generation of computers?",
        correct: "Both a and b",
        ans: ["SSI", "MSI", "LSI", "Both a and b"],
        category: "",
        difficulty: "",
        visited: false,
        answered: false,
        marked: false,
        selectedOption: null,
        marks: 0,
        submit: false,
      }
    );
    Dom();
  }

  if (category == 2) {
    CategoryForApi = "DevOps";
  }
  if (category == 3) {
    CategoryForApi = "Docker";
  }
  Dom();
}
var apikey = "UwKd8if2hm54PRvK7BS24fGhNKWuSk6KTBNv1KpP";
fetchit();

function fetchit() {
  for (var i = 0; i < 20; i++) {
    fetch(
      `https://quizapi.io/api/v1/questions?difficulty=${difficulty}&category=${CategoryForApi}&apiKey=${apikey}&limit=10`
    )
      .then((Response) => Response.json())
      .then((data) => {
        var obj = new object(data[0].question);
        obj.ans = data[0].answers;
        obj.correct = data[0].correct_answers;
        obj.category = data[0].category;
        obj.difficulty = data[0].difficulty;
        obj.visited = false;
        obj.answered = false;
        obj.marked = false;
        obj.selectedOption = null;
        obj.marks = 0;
        obj.submit = false;
        // arr.push(obj);
        Dom();
      });
  }
}

//questionBox filling

var pointer = 0;
function prevbutton() {
  if (pointer > 0) {
    pointer--;
    Dom();
  }
}
function nextbutton() {
  if (pointer < 19) {
    pointer++;
    Dom();
  } else popup();
}
// timer

// timer
var timer = document.getElementById("timer");
var intervalId;
var seconds = 60;
var minute = 14;

function stopTimer() {
  clearInterval(intervalId);
}

if (minute === 0 && seconds === 0) {
  stopTimer();
  pop();
}

intervalId = setInterval(() => {
  seconds--;
  if (seconds === 0) {
    minute--;
    seconds = 60;
    if (minute === 0) {
      stopTimer();
      poptime();
    }
  }
  timer.innerHTML = `00:${minute}:${seconds}`;
}, 1000);
function poptime() {
  alert("Your time is over your examination is submitted");
  root.innerHTML = "";
}
// progreee bar

// var progressBar = document.querySelector(".progressBar");
// var width = 0;
// setInterval(() => {
//   width++;
//   progressBar.style.width = width + "px";
// }, 2300);

// dark mode toggle

var flagForMode = 0;
var toggle = document.querySelector(".toggle");
var darkMode = document.querySelector(".darkMode");
var darkModesvg = document.querySelector(".darkModeSvg");
var lightMode = document.querySelector(".lightMode");
var lightModesvg = document.querySelector(".lightModeSvg");
var whitebggg = document.querySelectorAll(".white-bg");
var mangobggg = document.querySelectorAll(".mango-bg");
var redbggg = document.querySelector(".red-bg");
var bluebggg = document.querySelector(".blue-bg");
var buttonbgg = document.querySelectorAll(".button-bg");
var yellowbg = document.querySelectorAll(".yellowbg");
darkModesvg.style.visibility = "hidden";
darkMode.style.backgroundColor = "#212121";
toggle.style.backgroundColor = "rgb(71,85,105)";

function darkmode() {
  if (flagForMode == 0) {
    darkMode.style.backgroundColor = "black";
    toggle.style.backgroundColor = "black";
    lightMode.style.backgroundColor = "rgb(71,85,105)";
    darkModesvg.style.visibility = "visible";
    lightModesvg.style.visibility = "hidden";
    whitebggg.forEach((element) => {
      element.style.backgroundColor = "white";
      element.style.color = "#1e1e1e";
    });
    buttonbgg.forEach((element) => {
      element.style.backgroundColor = "rgb(71,85,105)";
      element.style.color = "white";
    });
    redbggg.style.backgroundColor = "red";
    bluebggg.style.backgroundColor = "rgb(2,132,199)";
    mangobggg.forEach((element) => {
      element.style.backgroundColor = "rgb(209,213,219)";
      element.style.color = "#99999";
    });
    yellowbg.forEach((element) => {
      element.style.backgroundColor = "rgb(30, 41 ,59)";
      element.style.color = "#99999";
    });
    // // bg change
    // whitebggg.style.backgroundColor = "white";
    // //font change
    // whitebggg.style.color = "#1e1e1e";

    flagForMode++;
  } else {
    lightMode.style.backgroundColor = "rgb(71,85,105)";
    toggle.style.backgroundColor = "rgb(71,85,105)";
    darkMode.style.backgroundColor = "#212121";
    lightModesvg.style.visibility = "visible";
    darkModesvg.style.visibility = "hidden";
    whitebggg.forEach((element) => {
      element.style.backgroundColor = "#1e1e1e";
      element.style.color = "rgb(151,151,151)";
    });
    redbggg.style.backgroundColor = "rgb(30,41,59)";
    bluebggg.style.backgroundColor = "rgb(18,18,18)";
    mangobggg.forEach((element) => {
      element.style.backgroundColor = "rgb(82,82,91)";
      element.style.color = "black";
    });
    buttonbgg.forEach((element) => {
      element.style.backgroundColor = "rgb(30,41,59)";
      element.style.color = "rgb(151,151,151)";
    });
    yellowbg.forEach((element) => {
      element.style.backgroundColor = "rgb(71,85,105)";
      element.style.color = "rgb(151,151,151)";
    });
    // // bg change
    // whitebggg.style.backgroundColor = "#1e1e1e";
    // whitebggg.style.color = "white";
    flagForMode--;
  }
  loopfun();
}

function Dom() {
  console.log(arr);
  if (arr[pointer].submit) {
    ans();
  }
  // arr[pointer].visited = true;
  QueDOMByButtons1();
  //question
  const questionEl = document.getElementById("question");
  questionEl.innerText = arr[pointer].que;
  // options
  const options = document.querySelectorAll(".options");
  var ASCIICodeForA = 97;
  for (let i = 0; i < options.length; i++) {
    let char = String.fromCharCode(ASCIICodeForA);
    // var temp = "answer_" + char;
    var temp = i;
    options[i].innerHTML = char + ") " + arr[pointer].ans[temp];
    ASCIICodeForA++;
  }
  // question No
  var questionNo = document.querySelector("#quehere1");
  questionNo.innerHTML = `Question ${pointer + 1}`;
  // second question no
  var quecounter2 = document.querySelector(".QueNo");
  quecounter2.innerHTML = `Question ${pointer + 1}/20`;

  // review
  // visited
  //answered ans not answered
  loopfun();
}
var visited = document.querySelector("#domNotVisited");
var selected = document.querySelector("#domAnswered");
var notSelected = document.querySelector("#domNotAnswered");
var Marked = document.querySelector("#domMarked");
var MarkedAndAnswered = document.querySelector("#domMarkedAndAnswered");
function loopfun() {
  var NotVisited = 20;
  var marked = 0;
  var selectedCounter = 0;
  var notSelectedCounter = 20;
  var markedAndAnswered = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].answered == true) {
      selectedCounter++;
      notSelectedCounter--;
    }
    if (arr[i].visited == true) {
      NotVisited--;
    }
    if (arr[i].marked == true && arr[i].answered == true) {
      markedAndAnswered++;
    }
    if (arr[i].marked == true) {
      marked++;
    }

    if (flagForMode === 0) {
      if (arr[pointer].selectedOption === null) {
        options.forEach((element) => {
          element.style.backgroundColor = "rgb(82,82,91)";
          element.style.color = "#e2e2e2";
        });
      }
      if (arr[pointer].selectedOption !== null) {
        options.forEach((element) => {
          element.style.backgroundColor = "rgb(82,82,91)";
          element.style.color = "#e2e2e2";
        });
        var optbg = document.querySelector(`#${arr[pointer].selectedOption}`);
        optbg.style.backgroundColor = "#B0C4DE";
        optbg.style.color = "black";
      }

      if (arr[i].marked == true) {
        divs[i].style.backgroundColor = "#EEDC82";
      }
      if (arr[i].answered == true) {
        divs[i].style.backgroundColor = "#B0C4DE";
      }
    }
    if (flagForMode === 1) {
      if (arr[pointer].selectedOption === null) {
        options.forEach((element) => {
          element.style.backgroundColor = "#D1D5DB";
          element.style.color = "#000";
        });
      }
      if (arr[pointer].selectedOption !== null) {
        options.forEach((element) => {
          element.style.backgroundColor = "#D1D5DB";
          element.style.color = "#000";
        });
        var optbg = document.querySelector(`#${arr[pointer].selectedOption}`);
        optbg.style.backgroundColor = "rgb(82,82,91)";
        optbg.style.color = "white";
      }
    }
    if (arr[i].marked == true) {
      divs[i].style.backgroundColor = "#EEDC82";
    }
    if (arr[i].answered == true) {
      divs[i].style.backgroundColor = "#B0C4DE";
    }
  }
  MarkedAndAnswered.innerHTML = markedAndAnswered;
  Marked.innerHTML = marked;
  visited.innerHTML = NotVisited;
  selected.innerHTML = selectedCounter;
  notSelected.innerHTML = notSelectedCounter;

  //quedom
}

// queCounter SUmmary

var divs = document.querySelectorAll("#myDiv");
if (pointer == 0) {
  if (flagForMode == 0) {
    divs[0].style.backgroundColor = "rgb(253 186 116)";
    divs[0].style.border = "solid 2px red";
    divs[0].style.color = "red";
    divs[0].style.fontSize = "25px";
  } else {
    divs[0].style.backgroundColor = "rgb(253 186 116)";
    divs[0].style.border = "solid 2px red";
    divs[0].style.color = "red";
    divs[0].style.fontSize = "25px";
  }
}
function QueDOMByButtons() {}
function QueDOMByButtons1() {
  arr[pointer].visited = true;
  divs.forEach(function (div, index) {
    if (index !== pointer) {
      div.style.border = "none";
      div.style.color = "black";
      div.style.fontSize = "20px";
    }
    if (index === pointer) {
      div.style.backgroundColor = "rgb(253 186 116)";
      div.style.border = "solid 2px red";
      div.style.color = "red";
      div.style.fontSize = "25px";
    }
  });
}

//adding eventlistener in button queCOunter

var button = document.querySelectorAll(".ButtonOfQueCounter");
for (let i = 0; i < divs.length; i++) {
  button[i].addEventListener("click", function Valuegiveer() {
    pointer = parseInt(button[i].innerText) - 1;
    Dom();
    QueDOMByButtons1();
    //changing value of visited == true
    arr[pointer].visited = true;
  });
}

// event listners for options button
var options = document.querySelectorAll(".options");
options.forEach((element) => {
  element.addEventListener("click", function selectionForOpt() {
    arr[pointer].answered = true;
    arr[pointer].selectedOption = element.id;
    Dom();
    // loopfun()
  });
});

// clear response
function clearResponse() {
  arr[pointer].answered = false;
  arr[pointer].marked = false;
  arr[pointer].selectedOption = null;
  Dom();
}
// marked button
function markbutton() {
  arr[pointer].marked = true;
  Dom();
}

function popup() {
  var visited = document.querySelector("#domNotVisited").innerText;
  var selected = document.querySelector("#domAnswered").innerText;
  var notSelected = document.querySelector("#domNotAnswered").innerText;
  var Marked = document.querySelector("#domMarked").innerText;
  var subPallete = document.querySelector(".subPallete");
  subPallete.style.visibility = "visible";
  var subAns = document.querySelector(".subAns");
  var subNotAns = document.querySelector(".subNotAns");
  var subMarked = document.querySelector(".subMarked");
  var subNotVisited = document.querySelector(".subNotVisited");
  subAns.innerHTML = selected;
  subNotAns.innerHTML = notSelected;
  subMarked.innerHTML = Marked;
  subNotVisited.innerHTML = visited;
}

// marks

function fff() {
  var subPallete = document.querySelector(".subPallete");
  subPallete.style.visibility = "hidden";
}

function pop() {
  document.querySelector(".ansbox").classList.remove("hidden");
  arr.forEach((element) => {
    element.submit = true;
  });
  var marks = 0;
  // Disable options
  let options = document.querySelectorAll(".options");
  options.forEach((element) => {
    element.setAttribute("disabled", "disabled");
  });
  // marks calculator
  arr.forEach((object) => {
    if (object.selectedOption === "a") {
      var answerByUser = object.ans[0];
    }
    if (object.selectedOption === "b") {
      var answerByUser = object.ans[1];
    }
    if (object.selectedOption === "c") {
      var answerByUser = object.ans[2];
    }
    if (object.selectedOption === "d") {
      var answerByUser = object.ans[3];
    }

    if (object.correct == answerByUser) {
      console.log("answerByUser: ", answerByUser);
      console.log("object.correct: ", object.correct);
      marks++;
      console.log("marks: ", marks);
    }
  });
  var subPallete = document.querySelector(".subPallete");
  subPallete.style.visibility = "hidden";
  alert("Your Examination is Over and Answers are Submitted");
  document.querySelector(".score").classList.remove("hidden");
  document.querySelector(".marksinner").innerHTML = marks;
  ans();
  var submit = document.querySelector(".submit");
  submit.classList.add("hidden");
}

function ans() {
  var ansbox = document.querySelector(".ansbox");
  ansbox.innerHTML = arr[pointer].correct;
  // if (arr[pointer].correct.answer_a_correct === "true") {
  //   ansbox.innerHTML = "Correct option is A";
  // } else if (arr[pointer].correct.answer_b_correct === "true") {
  //   ansbox.innerHTML = "Correct option is B";
  // } else if (arr[pointer].correct.answer_c_correct === "true") {
  //   ansbox.innerHTML = "Correct option is C";
  // } else if (arr[pointer].correct.answer_d_correct === "true") {
  //   ansbox.innerHTML = "Correct option is D";
  // }
  // else{
  //   ansbox.innerHTML="API Error"
  // }
}

function marksclose() {
  document.querySelector(".score").classList.add("hidden");
}
