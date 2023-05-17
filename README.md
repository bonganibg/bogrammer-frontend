# Introduction
This is a small demo application that simulates a more optimised flow of students uploading their tasks and reviewers receiving and reviewing the work.

# System Overview

## Summary 
Bogrammar an angular application that communicates with the [Bogrammar API](https://github.com/bonganibg/bogrammar-api). The application allows the following actions:

### Student 
- Upload files to the students dropbox folder
- Download tasks files from dropbox 
- Request reviews for tasks

### Reviewers
- View review backlog
- Download student work
- Submit review score

## Implementation

### Requirements
- Angular
- Axios
- Node

### Set up
*Clone repository*
``` shell
git clone https://github.com/bonganibg/bogrammar-frontend.git
```

*Change directory*
``` shell
cd bogrammar-frontend
```

#### Run Locally
``` shell
npm install 
npm run start
```

#### Run with docker
``` shell
docker build -t bogrammar-frontend .
docker run bogrammar-frontend
```

### Running Application
| Endpoint | Description |
| -- | -- |
| `http://localhost:4200/reviewer` | Go to the reviewer dashboard where you can download content and submit reviews |
| `http://localhost:4200/student` | Go to the student dashboard where you can upload, download and submit reviews |



