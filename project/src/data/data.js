export const data = [
  {
    district: "Tirupati",
    colleges: [
      /* --- 6 Government & Aided Colleges --- */
      {
        slug: "sv-govt-poly-tirupati",
        name: "S.V. Government Polytechnic",
        location: "KT Road, Tirupati",
        established: 1957,
        type: "Government",
        branches: [
          { name: "Civil Engineering", seats: 120 },
          { name: "Mechanical Engineering", seats: 120 },
          { name: "EEE", seats: 120 },
          { name: "ECE", seats: 60 },
          { name: "Computer Engineering", seats: 60 },
          { name: "Biomedical Engineering", seats: 60 },
          { name: "Chemical & Sugar Technology", seats: 30 }
        ]
      },
      {
        slug: "spw-poly-tirupati",
        name: "Sri Padmavati Women's Polytechnic (TTD)",
        location: "Nehru Nagar, Tirupati",
        established: 1975,
        type: "Government Aided",
        branches: [
          { name: "Computer Engineering", seats: 66 },
          { name: "ECE", seats: 50 },
          { name: "DCCP (Commercial Practice)", seats: 44 },
          { name: "Pharmacy (D.Pharma)", seats: 33 }
        ]
      },
      {
        slug: "gpt-pillaripattu",
        name: "Government Polytechnic",
        location: "Pillaripattu, Nagari",
        established: 2008,
        type: "Government",
        branches: [{ name: "Civil", seats: 60 }, { name: "Mechanical", seats: 60 }, { name: "ECE", seats: 60 }]
      },
      {
        slug: "gpt-satyavedu",
        name: "Government Polytechnic",
        location: "Satyavedu",
        established: 2008,
        type: "Government",
        branches: [{ name: "EEE", seats: 66 }, { name: "ECE", seats: 66 }, { name: "Refrigeration & AC", seats: 66 }]
      },
      {
        slug: "gpt-chandragiri",
        name: "Government Polytechnic",
        location: "Chandragiri",
        established: 2008,
        type: "Government",
        branches: [{ name: "EEE", seats: 66 }, { name: "ECE", seats: 66 }]
      },
      {
        slug: "gpt-kalikiri",
        name: "Government Polytechnic",
        location: "Kalikiri",
        established: 2009,
        type: "Government",
        branches: [{ name: "EEE", seats: 66 }, { name: "ECE", seats: 60 }]
      },

      /* --- 14 Private Colleges --- */
      {
        slug: "sree-vidyanikethan-poly",
        name: "Sree Vidyanikethan Polytechnic",
        location: "A. Rangampet",
        established: 1996,
        type: "Private",
        branches: [{ name: "EEE", seats: 120 }, { name: "Mechanical", seats: 120 }, { name: "ECE", seats: 60 }]
      },
      {
        slug: "siddharth-inst-puttur",
        name: "Siddharth Institute of Engineering & Technology",
        location: "Puttur",
        established: 2001,
        type: "Private",
        branches: [{ name: "Civil", seats: 60 }, { name: "EEE", seats: 120 }, { name: "Mechanical", seats: 60 }]
      },
      {
        slug: "crec-poly-tirupati",
        name: "Chadalawada Ramanamma Engineering College",
        location: "Renigunta Road",
        established: 2004,
        type: "Private",
        branches: [{ name: "Computer", seats: 60 }, { name: "ECE", seats: 60 }]
      },
      {
        slug: "kmmits-tirupati",
        name: "KMM Institute of Technology and Science",
        location: "Ramireddy Palli",
        established: 2008,
        type: "Private",
        branches: [{ name: "Mechanical", seats: 60 }, { name: "EEE", seats: 60 }]
      },
      {
        slug: "vaishnavi-inst-tirupati",
        name: "Vaishnavi Institute of Technology",
        location: "Tanapalle",
        established: 2007,
        type: "Private",
        branches: [{ name: "Civil", seats: 60 }, { name: "ECE", seats: 60 }]
      },
      {
        slug: "shree-technical-renigunta",
        name: "Shree Institute of Technical Education",
        location: "Renigunta",
        established: 2009,
        type: "Private",
        branches: [{ name: "Mechanical", seats: 60 }, { name: "EEE", seats: 60 }]
      },
      {
        slug: "swetha-women-tirupati",
        name: "Swetha Institute of Technology & Science for Women",
        location: "C. Ramapuram",
        established: 2008,
        type: "Private",
        branches: [{ name: "Computer", seats: 60 }, { name: "ECE", seats: 60 }]
      },
      {
        slug: "priyadarshini-it-tirupati",
        name: "Priyadarshini Institute of Technology",
        location: "Ramachandrapuram",
        established: 2008,
        type: "Private",
        branches: [{ name: "Civil", seats: 60 }, { name: "Mechanical", seats: 60 }]
      },
      {
        slug: "priyadarshini-ce-tirupati",
        name: "Priyadarshini College of Engineering",
        location: "Tirupati Rural",
        established: 2005,
        type: "Private",
        branches: [{ name: "EEE", seats: 60 }, { name: "ECE", seats: 60 }]
      },
      {
        slug: "svist-poly-tirupati",
        name: "Sri Venkateswara Institute of Science & Technology",
        location: "Karakambadi",
        established: 2007,
        type: "Private",
        branches: [{ name: "Mechanical", seats: 60 }, { name: "Civil", seats: 60 }]
      },
      {
        slug: "rvs-poly-tirupati",
        name: "RVS Polytechnic College",
        location: "Chittoor-Tirupati Hwy",
        established: 2011,
        type: "Private",
        branches: [{ name: "EEE", seats: 60 }, { name: "ECE", seats: 60 }]
      },
      {
        slug: "venkata-padmavathi-poly",
        name: "Venkata Padmavathi Institute",
        location: "Narasingapuram",
        established: 2009,
        type: "Private",
        branches: [{ name: "Mechanical", seats: 60 }, { name: "EEE", seats: 60 }]
      },
      {
        slug: "shree-rayalaseema-poly",
        name: "Shree Rayalaseema Polytechnic",
        location: "Tirupati",
        established: 2012,
        type: "Private",
        branches: [{ name: "Mechanical", seats: 60 }]
      },
      {
        slug: "ansar-poly-tirupati",
        name: "Ansar Polytechnic College",
        location: "Tirupati Rural",
        established: 2010,
        type: "Private",
        branches: [{ name: "Civil", seats: 60 }, { name: "Mechanical", seats: 60 }]
      }
    ]
  },
  {
    district: "YSR Kadapa",
    colleges: [
      /* --- 10 Government & Aided Colleges --- */
      {
        slug: "gpt-proddatur",
        name: "Government Polytechnic",
        location: "Korrapadu Road, Proddatur",
        established: 1959,
        type: "Government",
        branches: [{ name: "Mechanical", seats: 120 }, { name: "Civil", seats: 60 }, { name: "EEE", seats: 60 }, { name: "ECE", seats: 60 }, { name: "Computer", seats: 60 }]
      },
      {
        slug: "gptw-kadapa",
        name: "Government Polytechnic for Women",
        location: "Kadapa",
        established: 1985,
        type: "Government",
        branches: [{ name: "Pharmacy (D.Pharma)", seats: 60 }, { name: "Civil", seats: 60 }, { name: "EEE", seats: 60 }, { name: "ECE", seats: 50 }, { name: "Computer", seats: 50 }]
      },
      {
        slug: "gpt-vempalli",
        name: "Government Polytechnic",
        location: "Vempalli",
        established: 2008,
        type: "Government",
        branches: [{ name: "Mechanical", seats: 60 }, { name: "EEE", seats: 60 }, { name: "Civil", seats: 60 }]
      },
      {
        slug: "gpt-rajampeta",
        name: "Government Polytechnic",
        location: "Rajampeta",
        established: 2008,
        type: "Government",
        branches: [{ name: "EEE", seats: 60 }, { name: "Mechanical", seats: 60 }]
      },
      {
        slug: "gpt-jammalamadugu",
        name: "Government Polytechnic",
        location: "Jammalamadugu",
        established: 2008,
        type: "Government",
        branches: [{ name: "ECE", seats: 60 }, { name: "Computer Engineering", seats: 60 }]
      },
      {
        slug: "gpt-kamalapuram",
        name: "Government Polytechnic",
        location: "Kamalapuram",
        established: 2008,
        type: "Government",
        branches: [{ name: "EEE", seats: 60 }, { name: "ECE", seats: 60 }]
      },
      {
        slug: "gpt-simhadripuram",
        name: "Government Polytechnic",
        location: "Simhadripuram",
        established: 2009,
        type: "Government",
        branches: [{ name: "Mechanical", seats: 60 }, { name: "EEE", seats: 60 }]
      },
      {
        slug: "gpt-rayachoti",
        name: "Government Polytechnic",
        location: "Rayachoti",
        established: 2012,
        type: "Government",
        branches: [{ name: "Civil", seats: 60 }, { name: "Mechanical", seats: 60 }]
      },
      {
        slug: "gpt-obulavaripalli",
        name: "Government Polytechnic",
        location: "Obulavaripalli",
        established: 2012,
        type: "Government",
        branches: [{ name: "EEE", seats: 60 }, { name: "Mechanical", seats: 60 }]
      },
      {
        slug: "manuu-poly-kadapa",
        name: "Maulana Azad National Urdu University Polytechnic",
        location: "Devuni Kadapa",
        established: 2018,
        type: "Central Government",
        branches: [{ name: "Civil", seats: 60 }, { name: "Mechanical", seats: 60 }, { name: "EEE", seats: 60 }, { name: "ECE", seats: 60 }]
      },

      /* --- 11 Private Colleges --- */
      {
        slug: "loyola-pulivendla",
        name: "Loyola Polytechnic College",
        location: "Pulivendla",
        established: 1980,
        type: "Private",
        branches: [{ name: "Mining Engineering", seats: 60 }, { name: "Mechanical", seats: 120 }, { name: "Civil", seats: 60 }, { name: "Computer", seats: 60 }]
      },
      {
        slug: "aits-kadapa",
        name: "Annamacharya Institute of Technology and Sciences",
        location: "Utukur, Kadapa",
        established: 2010,
        type: "Private",
        branches: [{ name: "ECE", seats: 60 }, { name: "EEE", seats: 60 }, { name: "Mechanical", seats: 60 }]
      },
      {
        slug: "cbit-kadapa",
        name: "Chaitanya Bharathi Institute of Technology",
        location: "Vidya Nagar, Kadapa",
        established: 2008,
        type: "Private",
        branches: [{ name: "Computer Engineering", seats: 60 }, { name: "EEE", seats: 60 }]
      },
      {
        slug: "svcm-badvel",
        name: "S V C M Polytechnic College",
        location: "Badvel",
        established: 2009,
        type: "Private",
        branches: [{ name: "Civil", seats: 60 }, { name: "Mechanical", seats: 60 }]
      },
      {
        slug: "tm-poly-kadapa",
        name: "Tayyib Muslim Polytechnic College",
        location: "Ramarajupalli, Kadapa",
        established: 2010,
        type: "Private",
        branches: [{ name: "Civil", seats: 60 }, { name: "ECE", seats: 60 }]
      },
      {
        slug: "ssits-rayachoti",
        name: "Sri Sai Institute of Technology and Science",
        location: "Rayachoti",
        established: 2001,
        type: "Private",
        branches: [{ name: "Mechanical", seats: 60 }, { name: "EEE", seats: 60 }]
      },
      {
        slug: "nist-kadapa",
        name: "Narayanadri Institute of Science & Technology",
        location: "Rajampet",
        established: 2009,
        type: "Private",
        branches: [{ name: "Mechanical", seats: 60 }, { name: "ECE", seats: 60 }]
      },
      {
        slug: "gitamw-kadapa",
        name: "Gouthami Institute of Tech for Women",
        location: "Proddatur",
        established: 2009,
        type: "Private",
        branches: [{ name: "EEE", seats: 60 }, { name: "ECE", seats: 60 }]
      },
      {
        slug: "bcetw-kadapa",
        name: "Bharath College of Engineering & Tech for Women",
        location: "Kadapa",
        established: 2008,
        type: "Private",
        branches: [{ name: "Computer Engineering", seats: 60 }, { name: "ECE", seats: 60 }]
      },
      {
        slug: "gcet-kadapa",
        name: "Global College of Engineering and Technology",
        location: "Kadapa",
        established: 2008,
        type: "Private",
        branches: [{ name: "Civil", seats: 60 }, { name: "Mechanical", seats: 60 }]
      },
      {
        slug: "acharya-badvel",
        name: "Acharya College of Engineering",
        location: "Badvel",
        established: 2009,
        type: "Private",
        branches: [{ name: "Mechanical", seats: 60 }, { name: "EEE", seats: 60 }]
      }
    ]
  },
  {
  district: "Alluri Sitaramaraju",
    colleges: [
      {
        slug: "gmr-polytechnic-yetapaka",
        name: "Government Model Residential Polytechnic, Yetapaka",
        location: "Yetapaka",
        established: 1986,
        type: "Government",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Electrical & Electronics Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 }
        ]
      },
      {
        slug: "gmr-polytechnic-paderu",
        name: "Government Model Residential Polytechnic, Paderu",
        location: "Paderu",
        established: 1984,
        type: "Government",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Electrical & Electronics Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 }
        ]
      },
      {
        slug: "polytechnic-agriculture-rampachodavaram",
        name: "Polytechnic of Agriculture, Rampachodavaram",
        location: "Rampachodavaram",
        established: null, // Exact year not officially available
        type: "Government (Agriculture)",
        branches: [
          { name: "Diploma in Agriculture", seats: 34 }
        ]
      }
    ]
  },
   {
    district: "Anakapalli",
    colleges: [
      {
        slug: "gpt-anakapalli-rebaka",
        name: "Government Polytechnic, Anakapalli (Rebaka)",
        location: "Rebaka, Anakapalli",
        established: 2008,
        type: "Government",
        branches: [
          { name: "Computer Engineering", seats: 60 },
          { name: "Electronics & Communication Engineering", seats: 60 }
        ]
      },
      {
        slug: "mragr-gpt-college",
        name: "MRAGR Government Polytechnic College",
        location: "Anakapalli District",
        established: null, // exact year not available
        type: "Government",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 },
          { name: "Electrical & Electronics Engineering", seats: 60 }
        ]
      },
      {
        slug: "gbr-gpt",
        name: "GBR Government Polytechnic",
        location: "Chipurupalli / Anakapalli District",
        established: null,
        type: "Government",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 },
          { name: "Electrical & Electronics Engineering", seats: 60 }
        ]
      },
      {
        slug: "angrau-agri-polytechnic",
        name: "Acharya NG Ranga Agriculture Polytechnic",
        location: "Anakapalli",
        established: null,
        type: "Government (Agriculture)",
        branches: [
          { name: "Diploma in Agricultural Engineering", seats: 30 }
        ]
      },
      {
        slug: "recs-polytechnic",
        name: "RECS Polytechnic College / The Rajiv Gandhi Polytechnic",
        location: "Anakapalli",
        established: null,
        type: "Private",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 },
          { name: "Electrical & Electronics Engineering", seats: 60 },
          { name: "Electronics & Communication Engineering", seats: 60 }
        ]
      },
      {
        slug: "behara-subhakar-polytechnic",
        name: "Behara Subhakar Polytechnic",
        location: "Anakapalli District",
        established: null,
        type: "Private",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 }
        ]
      },
      {
        slug: "sanketika-polytechnic",
        name: "Sanketika Polytechnic",
        location: "Anakapalli District",
        established: null,
        type: "Private",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 }
        ]
      }
    ]
  },
    {
    district: "Anantapuramu",
    colleges: [
      {
        slug: "gpt-anantapur",
        name: "Government Polytechnic, Anantapur",
        location: "JNTU Road, Anantapur",
        established: null, // year not published
        type: "Government",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 120 },
          { name: "Electronics & Communication Engineering", seats: 60 },
          { name: "Electrical & Electronics Engineering", seats: 60 },
          { name: "Architectural Engineering", seats: 60 }
        ]
      },
      {
        slug: "gpt-kalyandurg",
        name: "Government Polytechnic, Kalyandurg",
        location: "Borampalli, Kalyandurg",
        established: null,
        type: "Government",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Electronics & Communication Engineering", seats: 60 }
        ]
      },
      {
        slug: "gpt-tadipatri",
        name: "Government Polytechnic, Tadipatri",
        location: "Sanjeeva Nagar, Tadipatri",
        established: null,
        type: "Government",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 },
          { name: "Electrical & Electronics Engineering", seats: 60 }
        ]
      },
      {
        slug: "gpt-uravakonda",
        name: "Government Polytechnic, Uravakonda",
        location: "Chinna Musturu Village, Uravakonda",
        established: null,
        type: "Government",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Electrical & Electronics Engineering", seats: 60 }
        ]
      },
      {
        slug: "gpt-dharmavaram",
        name: "Government Polytechnic, Dharmavaram",
        location: "Tarakaramapuram, Dharmavaram",
        established: null,
        type: "Government",
        branches: [
          { name: "Electronics & Communication Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 }
        ]
      },
      {
        slug: "gpt-madakasira",
        name: "Government Polytechnic, Madakasira",
        location: "Amarapuram Road, Madakasira",
        established: null,
        type: "Government",
        branches: [
          { name: "Electronics & Communication Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 }
        ]
      },
      {
        slug: "gpt-kadiri",
        name: "Government Polytechnic, Kadiri",
        location: "Pulivendula Road, Kadiri",
        established: null,
        type: "Government",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Electrical & Electronics Engineering", seats: 60 }
        ]
      },
      {
        slug: "gpt-rayadurg",
        name: "Government Polytechnic, Rayadurg",
        location: "Valmiki Nagar, Rayadurg",
        established: null,
        type: "Government",
        branches: [
          { name: "Electronics & Communication Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 }
        ]
      },
      {
        slug: "gpt-narpala",
        name: "Government Polytechnic, Narpala",
        location: "Tadipatri Road, Narpala",
        established: null,
        type: "Government",
        branches: [
          { name: "Electrical & Electronics Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 }
        ]
      },
      {
        slug: "gpt-women-hindupur",
        name: "Government Polytechnic for Women, Hindupur",
        location: "Sreekantapuram, Hindupur",
        established: null,
        type: "Government (Women)",
        branches: [
          { name: "Civil Engineering", seats: 50 },
          { name: "Electronics & Communication Engineering", seats: 50 },
          { name: "Diploma in Pharmacy", seats: 50 }
        ]
      },
      {
        slug: "pvkk-polytechnic",
        name: "PVKK Institute of Technology (2nd Shift Polytechnic)",
        location: "Alamur Road, Anantapur",
        established: null,
        type: "Private",
        branches: [
          { name: "Civil Engineering", seats: 54 },
          { name: "Mechanical Engineering", seats: 54 },
          { name: "Electrical & Electronics Engineering", seats: 54 },
          { name: "Electronics & Communication Engineering", seats: 54 }
        ]
      },
      {
        slug: "shirdi-sai-polytechnic",
        name: "Shri Shirdi Sai Institute of Science & Engineering (2nd Shift)",
        location: "Vidiyampeta, Bukkarayasamudram",
        established: null,
        type: "Private",
        branches: [
          { name: "Civil Engineering", seats: 48 },
          { name: "Mechanical Engineering", seats: 48 },
          { name: "Electrical & Electronics Engineering", seats: 48 },
          { name: "Electronics & Communication Engineering", seats: 48 }
        ]
      },
      {
        slug: "bit-hindupur",
        name: "BIT Institute of Technology (2nd Shift Polytechnic)",
        location: "Kadiri Road, Hindupur",
        established: null,
        type: "Private",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 },
          { name: "Electrical & Electronics Engineering", seats: 60 },
          { name: "Electronics & Communication Engineering", seats: 60 }
        ]
      },
      {
        slug: "skv-gooty",
        name: "Sri Krishnadevaraya Engineering College (2nd Shift Polytechnic)",
        location: "Peddavadugur, Gooty",
        established: null,
        type: "Private",
        branches: [
          { name: "Civil Engineering", seats: 30 },
          { name: "Mechanical Engineering", seats: 60 },
          { name: "Electrical & Electronics Engineering", seats: 30 }
        ]
      },
      {
        slug: "tadipatri-ec-polytechnic",
        name: "Tadipatri Engineering College (2nd Shift Polytechnic)",
        location: "Veerapuram, Tadipatri",
        established: null,
        type: "Private",
        branches: [
          { name: "Electrical & Electronics Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 }
        ]
      },
      {
        slug: "cv-raman-tadipatri",
        name: "Sir C. V. Raman Institute of Technology & Sciences (2nd Shift Polytechnic)",
        location: "Anantapur Road, Tadipatri",
        established: null,
        type: "Private",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 },
          { name: "Electrical & Electronics Engineering", seats: 60 },
          { name: "Electronics & Communication Engineering", seats: 60 }
        ]
      }
    ]
  },
  {
  district: "Annamayya",
    colleges: [
      {
        slug: "gpt-rayachoti",
        name: "Government Polytechnic College, Rayachoti",
        location: "Masapeta, Rayachoti, Annamayya",
        established: null, // exact year not available
        type: "Government",
        branches: [
          { name: "Electronics & Communication Engineering", seats: 60 },
          { name: "Electrical & Electronics Engineering", seats: 60 }
        ]
      },
      {
        slug: "sri-sai-institute-of-technology-and-science-polytechnic",
        name: "Sri Sai Institute of Technology & Science (Polytechnic)",
        location: "Rayachoti / Annamayya",
        established: null,
        type: "Private",
        branches: [
          { name: "Not Available Online", seats: null } // exact details not published
        ]
      },
      {
        slug: "golden-valley-integrated-campus-polytechnic",
        name: "Golden Valley Integrated Campus (Polytechnic)",
        location: "Madanapalle, Annamayya",
        established: null,
        type: "Private",
        branches: [
          { name: "Not Available Online", seats: null } // exact details not published
        ]
      }
    ]
  },
   {
    district: "Bapatla",
    colleges: [
      {
        slug: "government-polytechnic-addanki",
        name: "Government Polytechnic, Addanki",
        location: "Addanki, Bapatla District, Andhra Pradesh, 523201",
        established: null, // exact year not available
        type: "Government",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Electrical & Electronics Engineering", seats: 60 },
          { name: "Electronics & Communication Engineering", seats: 60 }
        ]
      },
      {
        slug: "government-polytechnic-repalle",
        name: "Government Polytechnic, Repalle",
        location: "Repalle, Bapatla District, Andhra Pradesh, 522265",
        established: null, // exact year not available
        type: "Government",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 },
          { name: "Electrical & Electronics Engineering", seats: 60 }
        ]
      },
      {
        slug: "bapatla-polytechnic",
        name: "Bapatla Polytechnic",
        location: "Bapatla, Bapatla District, Andhra Pradesh, 522106",
        established: 2001,
        type: "Private",
        branches: [
          { name: "Electrical & Electronics Engineering", seats: 120 },
          { name: "Electronics & Communication Engineering", seats: 120 },
          { name: "Mechanical Engineering", seats: 120 },
          { name: "Computer Science & Engineering", seats: 60 }
        ]
      }
    ]
  },
  {
  district: "Dr. B.R. Ambedkar Konaseema",
  colleges: [
    {
      slug: "gpt-draksharamam",
      name: "Government Polytechnic, Draksharamam",
      location: "Draksharamam",
      established: 2014,
      type: "Government",
      branches: [
        { name: "Civil Engineering", seats: 30 },
        { name: "Mechanical Engineering", seats: 30 }
      ]
    },
    {
      slug: "bvcs-poly-amalapuram",
      name: "BVC Polytechnic College",
      location: "Amalapuram",
      established: 2008,
      type: "Private",
      branches: [
        { name: "Computer Science & Engineering", seats: 180 },
        { name: "Electronics & Communication Engineering", seats: 60 },
        { name: "Electrical & Electronics Engineering", seats: 60 }
      ]
    },
    {
      slug: "siet-cheyyeru-poly",
      name: "Srinivasa Institute of Engineering & Technology (Polytechnic)",
      location: "Cheyyeru",
      established: 2009,
      type: "Private",
      branches: [
        { name: "Civil Engineering", seats: 60 },
        { name: "Mechanical Engineering", seats: 60 },
        { name: "Electrical & Electronics Engineering", seats: 60 },
        { name: "Electronics & Communication Engineering", seats: 60 },
        { name: "Computer Engineering", seats: 60 },
        { name: "Artificial Intelligence & Machine Learning", seats: 60 }
      ]
    },
    {
      slug: "vsm-ramachandrapuram-poly",
      name: "VSM College of Engineering (Polytechnic)",
      location: "Ramachandrapuram",
      established: 2009,
      type: "Private",
      branches: [
        { name: "Civil Engineering", seats: 60 },
        { name: "Mechanical Engineering", seats: 60 },
        { name: "Electrical & Electronics Engineering", seats: 60 }
      ]
    },
    {
      slug: "pydah-agri-poly-draksharamam",
      name: "Pydah Polytechnic of Agriculture",
      location: "Draksharamam",
      established: 2010,
      type: "Private (Agriculture Polytechnic)",
      branches: [
        { name: "Diploma in Agriculture", seats: 60 }
      ]
    },
    {
      slug: "mpm-agri-poly-moolapolam",
      name: "MPM Polytechnic of Agriculture",
      location: "Moolapolam",
      established: 2012,
      type: "Private (Agriculture Polytechnic)",
      branches: [
        { name: "Diploma in Agriculture", seats: 40 }
      ]
    }
  ]
},
  {
    district: "East Godavari",
    colleges: [
      {
        slug: "andhra‑polytechnic‑kakinada",
        name: "Andhra Polytechnic, Kakinada",
        location: "Kakinada",
        established: 1994,
        type: "Government",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 },
          { name: "Electrical Engineering", seats: 120 },
          { name: "Electronics & Communication Engineering", seats: 120 },
          { name: "Computer Engineering", seats: 120 },
          { name: "Automobile Engineering", seats: 60 }
        ]
      },
      {
        slug: "gpt‑women‑kakinada",
        name: "Government Polytechnic for Women, Kakinada",
        location: "Kakinada",
        established: null,
        type: "Government (Women)",
        branches: [
          { name: "Electronics & Communication Engineering", seats: 60 },
          { name: "Computer Science & Engineering", seats: 60 },
          { name: "Electrical & Electronics Engineering", seats: 60 }
        ]
      },
      {
        slug: "gpt‑draksharamam",
        name: "Government Polytechnic College, Draksharamam",
        location: "Draksharamam",
        established: null,
        type: "Government",
        branches: [
          { name: "Civil Engineering", seats: 30 },
          { name: "Mechanical Engineering", seats: 30 }
        ]
      },
      {
        slug: "gpt‑pithapuram",
        name: "Government Polytechnic College, Pithapuram",
        location: "Pithapuram",
        established: null,
        type: "Government",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 }
        ]
      },
      {
        slug: "gpt‑anaparthi",
        name: "Government Polytechnic, Anaparthi",
        location: "Anaparthi",
        established: null,
        type: "Government",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 }
        ]
      },
      {
        slug: "gmr‑polytechnic‑rajahmundry",
        name: "Dr. B.R.A. G.M.R. Polytechnic, Rajahmundry",
        location: "Rajahmundry",
        established: null,
        type: "Government",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 },
          { name: "Electrical & Electronics Engineering", seats: 60 }
        ]
      },
      {
        slug: "gmr‑polytechnic‑rampachodavaram",
        name: "Government Model Residential Polytechnic, Rampachodavaram",
        location: "Rampachodavaram",
        established: null,
        type: "Government",
        branches: [
          { name: "Mechanical Engineering", seats: 60 },
          { name: "Electrical & Electronics Engineering", seats: 60 }
        ]
      },
      {
        slug: "satya‑sree‑parimala‑polytechnic",
        name: "Satya Sree Parimala Polytechnic",
        location: "Kondagunturu, Rajahmundry",
        established: null,
        type: "Private",
        branches: [
          { name: "Mechanical Engineering", seats: 60 },
          { name: "Electronics & Communication Engineering", seats: 60 },
          { name: "Electrical & Electronics Engineering", seats: 60 },
          { name: "Computer Engineering", seats: 60 },
          { name: "Civil Engineering", seats: 60 }
        ]
      },
      {
        slug: "sri‑yvs‑brm‑polytechnic",
        name: "Sri YVS & Sri BRM Polytechnic",
        location: "Mukteswaram",
        established: null,
        type: "Private",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 },
          { name: "Electrical Engineering", seats: 60 }
        ]
      },
      {
        slug: "sraddaha‑polytechnic",
        name: "Sraddaha College of Diploma in Engineering & Technology",
        location: "Gokavaram",
        established: null,
        type: "Private",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 },
          { name: "Electrical & Electronics Engineering", seats: 60 },
          { name: "Computer Science & Engineering", seats: 60 }
        ]
      },
      {
        slug: "ist‑polytechnic",
        name: "International School of Technology and Sciences",
        location: "Jangareddy Gudem",
        established: null,
        type: "Private",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 },
          { name: "Electronics & Communication Engineering", seats: 60 },
          { name: "Computer Engineering", seats: 60 }
        ]
      },
      {
        slug: "ist‑women‑polytechnic",
        name: "International School of Technology and Sciences for Women",
        location: "East Gona Gudem",
        established: null,
        type: "Private (Women)",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Electronics & Communication Engineering", seats: 60 },
          { name: "Computer Engineering", seats: 60 }
        ]
      },
      {
        slug: "kits‑polytechnic",
        name: "Kakinada Institute of Technological Sciences (Polytechnic)",
        location: "Ambikapalli Agraharam",
        established: null,
        type: "Private",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 },
          { name: "Electrical & Electronics Engineering", seats: 60 }
        ]
      },
      {
        slug: "kiet‑polytechnic",
        name: "Kakinada Institute of Engineering & Technology (Polytechnic)",
        location: "Korangi / Yanam Road",
        established: null,
        type: "Private",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 },
          { name: "Electronics & Communication Engineering", seats: 60 },
          { name: "Computer Engineering", seats: 60 }
        ]
      },
      {
        slug: "kiet‑polytechnic‑ii",
        name: "Kakinada Institute of Engineering & Technology – II (Polytechnic)",
        location: "Korangi",
        established: null,
        type: "Private",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 },
          { name: "Electrical Engineering", seats: 60 },
          { name: "Computer Engineering", seats: 60 }
        ]
      },
      {
        slug: "kit‑science‑polytechnic",
        name: "Kakinada Institute of Technology and Science (Polytechnic)",
        location: "Peddapuram",
        established: null,
        type: "Private",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 },
          { name: "Electrical & Electronics Engineering", seats: 60 },
          { name: "Computer Engineering", seats: 60 }
        ]
      },
      {
        slug: "leela‑krishna‑babuji‑polytechnic",
        name: "Leela Krishna Babuji Polytechnic",
        location: "Ravulapalem",
        established: null,
        type: "Private",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 },
          { name: "Electronics & Communication Engineering", seats: 60 }
        ]
      },
      {
        slug: "sri‑vidya‑polytechnic",
        name: "Sri Vidya Polytechnic College",
        location: "East Godavari",
        established: null,
        type: "Private",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 },
          { name: "Electrical & Electronics Engineering", seats: 60 },
          { name: "Electronics & Communication Engineering", seats: 60 }
        ]
      },
      {
        slug: "b-a‑ramaiah‑polytechnic",
        name: "B.A. Ramaiah Polytechnic",
        location: "Rajahmundry",
        established: null,
        type: "Private",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 },
          { name: "Computer Engineering", seats: 60 }
        ]
      }
    ]
  },
    {
    district: "Guntur",
    colleges: [
      {
        slug: "mbts-govt-polytechnic",
        name: "M.B.T.S. Government Polytechnic",
        location: "Nallapadu, Guntur",
        established: null,
        type: "Government",
        branches: [
          { name: "Civil Engineering", seats: null },
          { name: "Mechanical Engineering", seats: null },
          { name: "Electrical & Electronics Engineering", seats: null },
          { name: "Electronics & Communication Engineering", seats: null }
        ]
      },
      {
        slug: "govt-polytechnic-for-women-guntur",
        name: "Government Polytechnic for Women",
        location: "Gujjanagundla, Guntur",
        established: null,
        type: "Government",
        branches: [
          { name: "Diploma Courses (various)", seats: null }
        ]
      },
      {
        slug: "govt-polytechnic-for-minorities-guntur",
        name: "Government Polytechnic for Minorities",
        location: "Nallapadu, Guntur",
        established: null,
        type: "Government",
        branches: [
          { name: "Diploma Courses (various)", seats: null }
        ]
      },
      {
        slug: "govt-institute-of-textile-technology-guntur",
        name: "Government Institute of Textile Technology",
        location: "Nallapadu, Guntur",
        established: null,
        type: "Government",
        branches: [
          { name: "Textile Technology", seats: null }
        ]
      },
      {
        slug: "govt-polytechnic-ponnur",
        name: "Government Polytechnic, Ponnur",
        location: "Ponnur, Guntur",
        established: null,
        type: "Government",
        branches: [
          { name: "Diploma Courses (various)", seats: null }
        ]
      },
      {
        slug: "govt-polytechnic-krosuru",
        name: "Government Polytechnic, Krosuru",
        location: "Krosuru, Guntur",
        established: null,
        type: "Government",
        branches: [
          { name: "Diploma Courses (various)", seats: null }
        ]
      },
      {
        slug: "govt-polytechnic-repalle",
        name: "Government Polytechnic, Repalle",
        location: "Repalle, Guntur",
        established: null,
        type: "Government",
        branches: [
          { name: "Diploma Courses (various)", seats: null }
        ]
      },
      {
        slug: "bapatla-polytechnic",
        name: "Bapatla Polytechnic",
        location: "Bapatla, Guntur",
        established: null,
        type: "Private",
        branches: [
          { name: "Diploma Courses (various)", seats: null }
        ]
      },
      {
        slug: "mulagondla-pakira-reddy-memorial-polytechnic",
        name: "Mulagondla Pakira Reddy Memorial Polytechnic",
        location: "Guntur District",
        established: null,
        type: "Private",
        branches: [
          { name: "Diploma Courses (various)", seats: null }
        ]
      },
      {
        slug: "chundi-ranganayakulu-polytechnic",
        name: "Chundi Ranganayakulu Polytechnic",
        location: "Guntur District",
        established: null,
        type: "Private",
        branches: [
          { name: "Diploma Courses (various)", seats: null }
        ]
      }
    ]
  },
    {
    district: "Eluru",
    colleges: [
      /* --- 3 Government Colleges --- */
      {
        slug: "gpt-eluru",
        name: "Government Polytechnic, Eluru",
        location: "Duggirala, Eluru",
        established: 1960,
        type: "Government",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 },
          { name: "Electrical & Electronics Engineering", seats: 60 },
          { name: "Electronics & Communication Engineering", seats: 60 },
          { name: "Computer Engineering", seats: 60 }
        ]
      },
      {
        slug: "gpt-jangareddygudem",
        name: "Government Polytechnic, Jangareddygudem",
        location: "Srinivasapuram Road, Jangareddygudem",
        established: 2008,
        type: "Government",
        branches: [
          { name: "Civil Engineering", seats: 48 },
          { name: "Mechanical Engineering", seats: 48 }
        ]
      },
      {
        slug: "gpt-nuzvid",
        name: "Government Polytechnic, Nuzvid",
        location: "Venkatadripuram, Nuzvid",
        established: 2008,
        type: "Government",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 120 },
          { name: "Electrical & Electronics Engineering", seats: 120 },
          { name: "Electronics & Communication Engineering", seats: 120 },
          { name: "Computer Engineering", seats: 120 },
          { name: "Artificial Intelligence and Machine Learning", seats: 60 }
        ]
      },

      /* --- 4 Private Colleges --- */
      {
        slug: "sir-crr-polytechnic-eluru",
        name: "Sir C.R. Reddy Polytechnic",
        location: "Vatluru, Eluru",
        established: 1945,
        type: "Private",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 120 },
          { name: "Electrical & Electronics Engineering", seats: 120 },
          { name: "Electronics & Communication Engineering", seats: 60 },
          { name: "Computer Science & Engineering", seats: 60 }
        ]
      },
      {
        slug: "hits-eluru",
        name: "Helapuri Institute of Technology and Science",
        location: "Vegavaram, Eluru",
        established: 2009,
        type: "Private",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 },
          { name: "Electrical & Electronics Engineering", seats: 60 },
          { name: "Electronics & Communication Engineering", seats: 60 },
          { name: "Computer Engineering", seats: 60 }
        ]
      },
      {
        slug: "nova-vegavaram",
        name: "Nova Institute of Technology (Diploma)",
        location: "Vegavaram, Eluru",
        established: 2001,
        type: "Private",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 },
          { name: "Electronics & Communication Engineering", seats: 60 }
        ]
      },
      {
        slug: "ramachandra-eluru",
        name: "Ramachandra College of Engineering (Diploma)",
        location: "Vatluru, Eluru",
        established: 2008,
        type: "Private",
        branches: [
          { name: "Electrical & Electronics Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 }
        ]
      }
    ]
  },
  {
    district: "West Godavari",
    colleges: [
      /* --- Government Colleges --- */
      {
        slug: "smn-gpt-tanuku",
        name: "S.M.V.M. Polytechnic",
        location: "Tanuku",
        established: 1958,
        type: "Government Aided",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 120 },
          { name: "Electrical & Electronics Engineering", seats: 120 },
          { name: "Applied Electronics & Instrumentation", seats: 60 }
        ]
      },
      {
        slug: "gpt-bhimavaram",
        name: "Government Polytechnic, Bhimavaram",
        location: "Bhimavaram (HQ)",
        established: 2013,
        type: "Government",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 }
        ]
      },
      /* --- Private Colleges --- */
      {
        slug: "srkr-bhimavaram",
        name: "S.R.K.R. Engineering College (Diploma)",
        location: "Chinna Amiram, Bhimavaram",
        established: 1980,
        type: "Private",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 }
        ]
      },
      {
        slug: "dnr-bhimavaram",
        name: "D.N.R. College of Engineering & Tech (Diploma)",
        location: "Bhimavaram",
        established: 2010,
        type: "Private",
        branches: [
          { name: "Electrical & Electronics Engineering", seats: 60 },
          { name: "Electronics & Communication Engineering", seats: 60 }
        ]
      },
      {
        slug: "swarnandhra-narsapur",
        name: "Swarnandhra College of Engineering & Tech",
        location: "Seetharampuram, Narsapur",
        established: 2001,
        type: "Private",
        branches: [
          { name: "Mechanical Engineering", seats: 120 },
          { name: "Electrical & Electronics Engineering", seats: 60 }
        ]
      }
    ]
  },
    {
    district: "Kakinada",
    colleges: [
      {
        slug: "andhra-polytechnic-kakinada",
        name: "Andhra Polytechnic College",
        location: "Kakinada",
        established: 1946,
        type: "Government",
        branches: [
          { name: "Electronics & Communication Engineering", seats: 120 },
          { name: "Computer Engineering", seats: 120 },
          { name: "Electrical & Electronics Engineering", seats: 120 },
          { name: "Civil Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 60 },
          { name: "Automobile Engineering", seats: 60 },
          { name: "Architectural Assistantship", seats: 60 }
        ]
      },
      {
        slug: "govt-polytechnic-women-kakinada",
        name: "Government Polytechnic for Women",
        location: "Kakinada",
        established: 1961,
        type: "Government (Women-Only)",
        branches: [
          { name: "Electronics & Communication Engineering", seats: 66 },
          { name: "Civil Engineering", seats: 50 },
          { name: "Commercial & Computer Practice (CCP/IT)", seats: 50 },
          { name: "Diploma Pharmacy", seats: 40 }
        ]
      },
      {
        slug: "chaitanya-polytechnic-kakinada",
        name: "Chaitanya Polytechnic College",
        location: "Kakinada",
        established: 2013,
        type: "Private",
        branches: [
          { name: "Mechanical Engineering", seats: 120 },
          { name: "Civil Engineering", seats: 60 },
          { name: "Electrical & Electronics Engineering", seats: 60 },
          { name: "Electronics & Communication Engineering", seats: 60 }
        ]
      },
      {
        slug: "aditya-polytechnic-surampalem",
        name: "Aditya Polytechnic College",
        location: "Surampalem, East Godavari",
        established: 2009,
        type: "Private",
        branches: [
          { name: "Civil Engineering", seats: 60 },
          { name: "Mechanical Engineering", seats: 120 },
          { name: "Electrical & Electronics Engineering", seats: 120 },
          { name: "Electronics & Communication Engineering", seats: 300 },
          { name: "Computer Engineering", seats: 600 }
        ]
      }
    ]
  },
  
];