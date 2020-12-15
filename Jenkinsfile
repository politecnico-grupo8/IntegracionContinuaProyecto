pipeline {
  agent any
  stages {
    stage('test') {
      steps {
        sh 'npm install -g @angular/cli'
        sh 'npm install'
        sh 'npm run ng test -- --watch=false --code-coverage'
      }
    }

    stage('build') {
      steps {
        sh 'npm install -g @angular/cli'
        sh 'npm install'
        sh 'npm run ng build'
      }
    }

    stage('deploy') {
      steps {
        sh 'XCopy dist\\ C:\\inetpub\\wwwroot\\dist\\'
      }
    }
  }
} 
