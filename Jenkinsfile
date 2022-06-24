pipeline {
  agent any
    environment {
        CI = 'true'
    }
  tools {nodejs "nodejs"}
  stages {     
    stage('Build') {
      steps {
        sh 'ls'
        sh 'cd client;npm install'
      }
    }  
    stage('Test') {
      steps {  
        echo 'Test'
      }
    }
  }
}