function myBiodata(biodata){
  let biodataObj = {
    "name": 'Alfian Muhammad',
    "address": 'Mekar Kondang kec.Sukadiri Tangerang Banten',
    "hobbies": [
      'Badminton', 'Futsall', 'Ngoding' 
    ],
    "is_married": false,
    "school": {
      "highSchool": 'SMKN 2 KABUPATEN TANGERANG',
      "university": "--"
    },
    "skills": [
      {
       "nama": "Mobile dev",
       "level": "beginner",
      }
    ] 
    "interest_in_coding" : true,
  }

  return biodataObj
}
console.log(myBiodata('alfian'));
