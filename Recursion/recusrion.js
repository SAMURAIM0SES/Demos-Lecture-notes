const exampleDirectory = {
    type: 'dir',
    name: 'dirA',
    children: [
      {
        type: 'file',
        name: 'fileA',
      },
      {
        type: 'file',
        name: 'fileB',
      },
      {
        type: 'dir',
        name: 'dirB',
        children: [
          {
            type: 'dir',
            name: 'dirC',
            children: [
              {
                type: 'file',
                name: 'fileC',
              },
              {
                type: 'dir',
                name: 'dirD',
                children: [],
              },
            ],
          },
        ],
      },
    ],
  };
  
  function listDirectory(directory, list =[]){
    if(directory.type === "file" || directory.children.length === 0){
        list.push(directory.name);
        return
    }
    list.push(directory.name)

    for(const child of directory.children){
        listDirectory(child, list)

    }
    return list
  }
  
  /* 
  [
    'dirA',  'fileA',
    'fileB', 'dirB',
    'dirC',  'fileC',
    'dirD'
  ]
  */
 console.log(listDirectory(exampleDirectory))