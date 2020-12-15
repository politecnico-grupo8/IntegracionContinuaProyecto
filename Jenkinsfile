pipeline {
  agent any
  stages {
    stage('test') {
      steps {
        sh 'sudo npm install -g @angular/cli'
        sh 'sudo npm install'
        sh 'sudo npm run ng test -- --watch=false --code-coverage'
      }
    }

    stage('build') {
      steps {
        sh 'sudo npm install -g @angular/cli'
        sh 'sudo npm install'
        sh 'sudo npm run ng build'
      }
    }

    stage('deploy') {
      steps {
        sh 'XCopy dist\\ C:\\inetpub\\wwwroot\\dist\\'
      }
    }
  }
} 
