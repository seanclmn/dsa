const matrix = 
[
[1, 0, 0],
[0, 1, 1],
[1, 0, 0]
]


function bfs(adj){
  let queue = []
  let m=adj.length-1
  let n=adj[0].length-1
  let x=0
  let y=0

  let count=0;
  let max=0;

  while(queue.length > 0){
    length+=1
    gooner(x,y)
  }

  function gooner(i,j){
    if(i<0 || i>m || j<0 || j>n)

    gooner(i+1,j)
    gooner(i-1,j)
    gooner(i,j+1)
    gooner(i,j-1)



  }
  
}
