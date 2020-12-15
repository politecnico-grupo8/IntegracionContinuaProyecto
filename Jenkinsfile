pipeline {
  agent any
  stages {
    stage('Tests') {
      steps {
        sh 'sudo npm install'
        sh 'sudo npm run ng test -- --watch=false --code-coverage'
      }
    }

    stage('Build') {
      steps {
        sh 'sudo docker build -t scanner-solutions .'
      }
    }

    stage('Deploy') {
      steps {
        sh 'sudo docker rm -f escaner-poli'
        sh 'sudo docker run -d --name escaner-poli -p 4530:4200 scanner-solutions'
      }
    }
  }
} 
