// Description: Shortest Job First (SJF) is a scheduling algorithm that selects the waiting process with the smallest execution time to execute next.
// The process with the smallest execution time is selected for the next execution.
//

function sfj(jobs, index) {
  let time = 0;
  //let job = jobs[index];

  for (let i = 0; i < jobs.length; i++) {
    console.log(jobs[i]);
    console.log(jobs[index]);
    if (jobs[i] <= jobs[index]) {
      time += jobs[i];
    }
  }

  console.log(time);
}

// sfj([3, 2, 10, 10, 5, 6, 4], 4);
sfj([3, 10, 20, 1, 2], 0);
sfj([3, 10, 10, 20, 1, 2], 2);
console.log(sfj([10, 10, 10, 10], 3));
