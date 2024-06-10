function findPassAllEdgeOncePath(edges) {
   const allNodeNames = [...new Set(edges.flat())];
   const graph = constructGraph(allNodeNames, edges);

   console.log('from edges =>', edges);
   console.log('contructed graph =>', graph);
}

function constructGraph(nodeNames, edges) {
   const graph = [];

   for (const nodeName of nodeNames) {
      graph.push({ name: nodeName, nameOfNeighbors: [] });
   }

   for (const [startNodeName, endNodeName] of edges) {
      for (const node of graph) {
         if (node.name === startNodeName) {
            node.nameOfNeighbors.push(endNodeName);
         }
         if (node.name === endNodeName) {
            node.nameOfNeighbors.push(startNodeName);
         }
      }
   }

   return graph;
}

test();

function test() {
   const edges1 = [
      ['A', 'B'],
      ['B', 'C'],
      ['B', 'D'],
      ['C', 'D'],
   ];

   const path1 = findPassAllEdgeOncePath(edges1);
}
